FROM mcr.microsoft.com/dotnet/aspnet:5.0-alpine AS base
WORKDIR /app
EXPOSE 80
EXPOSE 443

RUN apk add --no-cache icu-libs
ENV DOTNET_SYSTEM_GLOBALIZATION_INVARIANT=false

FROM node:16-alpine AS node
COPY ClientApp .
RUN yarn install
RUN yarn build

FROM mcr.microsoft.com/dotnet/sdk:5.0-alpine AS build

WORKDIR /src
COPY ["minecraft-rewards.csproj", "./"]
RUN dotnet restore "minecraft-rewards.csproj"
COPY . .
WORKDIR "/src/"
RUN dotnet build "minecraft-rewards.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "minecraft-rewards.csproj" -c Release -o /app/publish

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
COPY --from=node /build ./ClientApp/build
ENTRYPOINT ["dotnet", "minecraft-rewards.dll"]

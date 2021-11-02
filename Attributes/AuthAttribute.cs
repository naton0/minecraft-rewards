using System;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Text;
using System.Web;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Filters;
using Microsoft.IdentityModel.Tokens;

namespace minecraft_rewards.Attributes
{
    public class AuthAttribute : ActionFilterAttribute
    {

        public override void OnActionExecuting(ActionExecutingContext context)
        {
            var link =
                $"https://{Environment.GetEnvironmentVariable("NEXTCLOUD_DOMAIN")}/apps/oauth2/authorize?response_type=code&client_id={Environment.GetEnvironmentVariable("NEXTCLOUD_ID")}&redirect_uri={HttpUtility.UrlEncode(Environment.GetEnvironmentVariable("REDIRECT_URI"))}";

            if (context.HttpContext.Request.Headers.TryGetValue("Authorization", out var token))
            {
                token = token.ToString().Replace("Bearer ", "");
                try
                {
                    var tokenHandler = new JwtSecurityTokenHandler();
                    var key = Encoding.ASCII.GetBytes(Environment.GetEnvironmentVariable("SECRET") ?? "secret");
                    tokenHandler.ValidateToken(token, new TokenValidationParameters
                    {
                        ValidateIssuerSigningKey = true,
                        IssuerSigningKey = new SymmetricSecurityKey(key),
                        ValidateIssuer = false,
                        ValidateAudience = false,
                        ClockSkew = TimeSpan.Zero
                    }, out var validatedToken);

                    var jwtToken = (JwtSecurityToken)validatedToken;

                    if (jwtToken.Claims.First(x => x.Type == "auth").ToString() != "auth: true")
                    {
                        context.Result = new UnauthorizedObjectResult(new
                        {
                            Link = link
                        });
                    }
                }
                catch (Exception)
                {
                    context.Result = new UnauthorizedObjectResult(new
                    {
                        Link = link
                    });
                }
            }
            else
            {
                context.Result = new UnauthorizedObjectResult(new
                {
                    Link = link
                });
            }
        }
    }
}
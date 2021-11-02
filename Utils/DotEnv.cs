﻿using System;
using System.IO;
using System.Linq;

namespace minecraft_rewards.Utils
{
    public class DotEnv
    {
        public static void Load(string filePath)
        {
            if (!File.Exists(filePath))
                return;

            foreach (var line in File.ReadAllLines(filePath))
            {
                var parts = line.Split(
                    '=',
                    StringSplitOptions.RemoveEmptyEntries);

                if (parts.Length < 2)
                    continue;

                Environment.SetEnvironmentVariable(parts[0], line[(parts[0].Length + 1)..]);
            }
        }
    }
}
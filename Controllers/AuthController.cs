using System;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;
using minecraft_rewards.Attributes;
using minecraft_rewards.Utils;
using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;

namespace minecraft_rewards.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthController : Controller
    {
        [HttpGet("me")]
        public IActionResult Me()
        {
            return Ok();
        }
    }
}
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace website.Server.Controllers;

[Route("api/[controller]")]
[ApiController]
public abstract class WebsiteControllerBase : ControllerBase
{

}

using Microsoft.AspNetCore.Mvc;
using website.Server.Models.Entities;

namespace website.Server.Controllers;

public class UserController : WebsiteControllerBase
{
    [HttpGet]
    public async Task<List<User>> GetAll()
    {
        List<User> ret = new();

        ret.Add(new User { FirstName = "George", LastName = "O'Carroll"});

        return ret;
    }
}

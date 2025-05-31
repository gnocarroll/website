using Microsoft.AspNetCore.Mvc;
using website.Server.Models.DTOs;
using website.Server.Models.Entities;

namespace website.Server.Controllers;

public class UserController : WebsiteControllerBase
{
    [HttpGet]
    [Route("all")]
    public async Task<ActionResult<IEnumerable<UserDTO>>> GetAll()
    {
        List<User> users = new();

        users.Add(new User { Id = 1, FirstName = "George", LastName = "O'Carroll"});

        return Ok(from user in users select UserDTO.FromUser(user));
    }

    [HttpGet]
    public async Task<ActionResult<IEnumerable<UserDTO>>> Get()
    {
        return await GetAll();
    }

    [HttpGet]
    [Route("{id}")]
    public async Task<ActionResult<UserDTO>> Get(int id)
    {
        return Ok(UserDTO.FromUser(
            new User { Id = 1, FirstName = "George", LastName = "O'Carroll" }
        ));
    }
}

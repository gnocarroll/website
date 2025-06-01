using Microsoft.AspNetCore.Mvc;
using server.Models.DTOs;
using website.Server.Models.Entities;

namespace website.Server.Controllers;

public class ProjectsController : WebsiteControllerBase
{
    [HttpGet]
    public async Task<ActionResult<IEnumerable<ProjectDTO>>> Get([FromRoute] int userId)
    {
        List<Project> projects = [new Project{
            Name = "Personal Website",
            Description = "This website.",
            StartDate = DateOnly.MinValue,
            EndDate = DateOnly.MaxValue,
            UserId = 1,
            User = new User { FirstName = "George", LastName = "O'Carroll" }
        }];

        return Ok(from project in projects select ProjectDTO.FromProject(project));
    }

    [HttpGet]
    [Route("detail/{id}")]
    public async Task<ActionResult<ProjectDTO>> GetDetail(int id)
    {
        return Ok(ProjectDTO.FromProject(new Project
        {
            Name = "Personal Website",
            Description = "This website.",
            StartDate = DateOnly.MinValue,
            EndDate = DateOnly.MaxValue,
            UserId = 1,
            User = new User { FirstName = "George", LastName = "O'Carroll" }
        }));
    }
}
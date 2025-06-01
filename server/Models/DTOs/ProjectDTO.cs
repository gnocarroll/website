using Microsoft.AspNetCore.Authorization.Infrastructure;
using website.Server.Models.Entities;

namespace server.Models.DTOs;

public class ProjectDTO
{
    public required string Name { get; set; }
    public required string Description { get; set; }

    public required DateOnly StartDate { get; set; }
    public required DateOnly EndDate { get; set; }

    public required int UserId { get; set; }

    public static ProjectDTO FromProject(Project project)
    {
        return new ProjectDTO
        {
            Name = project.Name,
            Description = project.Description,
            StartDate = project.StartDate,
            EndDate = project.EndDate,
            UserId = project.UserId
        };
    }
}

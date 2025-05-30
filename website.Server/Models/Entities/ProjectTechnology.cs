namespace website.Server.Models.Entities;

public class ProjectTechnology : EntityBase
{
    public required int ProjectId;
    public required Project Project;

    public required int TechnologyId;
    public required Technology Technology;
}

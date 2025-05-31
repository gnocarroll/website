namespace website.Server.Models.Entities;

public class Project : EntityBase
{
    public static readonly DateOnly DefaultStartEndDate = DateOnly.Parse("1900-01-01");
    
    public required string Name;

    public required string Description = string.Empty;

    public required DateOnly StartDate = DefaultStartEndDate;
    public required DateOnly EndDate = DefaultStartEndDate;

    public required int UserId;
    public required User User;
}

namespace website.Server.Models.Entities;

public class User : EntityBase
{
    public required string FirstName;
    public required string LastName;

    public string Bio = String.Empty;

    public static readonly User ExampleUser = new User {
        FirstName = "George",
        LastName = "O'Carroll",
        Bio = "Example Bio"
    };
}

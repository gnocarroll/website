using System.ComponentModel.DataAnnotations;

namespace website.Server.Models.Entities;

public class Email : EntityBase
{
    public enum EmailType
    {
        Personal,
        School,
        Work,
    }

    [EmailAddress]
    public required string EmailString;

    public required EmailType Type;

    public required int UserId;
    public required User User;
}

using System.ComponentModel.DataAnnotations;

namespace website.Server.Models.Entities;

public class PhoneNumber
{
    public enum PhoneNumberType
    {
        Mobile,
        Home,
        Work,
    }
    
    [Phone]
    public required string PhoneNumberString;

    public required PhoneNumberType Type;

    public required int UserId;
    public required User User;
}

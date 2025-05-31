using website.Server.Models.Entities;

namespace website.Server.Models.DTOs;

public class UserDTO
{
    public required int Id;

    public required string FirstName;
    public required string LastName;

    public required string Bio;

    public static UserDTO FromUser(User user)
    {
        return new UserDTO {
            Id = user.Id,
            FirstName = user.FirstName,
            LastName = user.LastName,
            Bio = user.Bio,
        };
    }
}

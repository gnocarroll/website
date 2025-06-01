using website.Server.Models.Entities;

namespace website.Server.Models.DTOs;

public class UserDTO
{
    public required int Id { get; set; }
    public required string FirstName { get; set; }
    public required string LastName { get; set; }
    public required string Bio { get; set; }

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

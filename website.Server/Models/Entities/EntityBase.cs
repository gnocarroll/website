namespace website.Server.Models.Entities;

abstract public class EntityBase
{
    public int Id;

    public DateTime Created = DateTime.Now;
    public DateTime Modified = DateTime.Now;
}

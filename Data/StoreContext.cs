using Microsoft.EntityFrameworkCore;
using API.Entities;

namespace API.Data
{
    public class StoreContext : DbContext
    {
        public StoreContext(DbContextOptions options) : base(options)
        {
        }

        public DbSet<Soldiers> Soldiers {get; set;}
        public DbSet<LohePosti> LohePostis {get; set;}

        public DbSet<Login> Logins {get; set;}
    }
}
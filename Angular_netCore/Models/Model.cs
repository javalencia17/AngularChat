using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Angular_netCore.Models
{
    public class MyDbContext : DbContext
    {
        public MyDbContext(DbContextOptions<MyDbContext> options): base(options)
        {

        }

        public DbSet<Message> Messages { get; set; }
    }

    public class Message
    {
        public int Id { get; set; }
        public string Nombre { get; set; }
        public string Text { get; set; }
    }
}

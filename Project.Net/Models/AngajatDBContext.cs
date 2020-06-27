using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;


namespace Project.Net.Models
{
    public class AngajatDBContext : DbContext
    {
     public AngajatDBContext(DbContextOptions<AngajatDBContext> options)
      : base(options)
        {
        }

        public DbSet<Angajat> Angajati { get; set; }
        public DbSet<Santier> Santiere { get; set; }

        public DbSet<Utilizator> Utilizatori { get; set; }
    }
}

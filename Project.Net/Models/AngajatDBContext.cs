using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;


namespace Project.Net.Models
{
    public class AngajatDBContext : IdentityDbContext
    {
        public DbSet<Angajat> Angajati { get; set; }
        public DbSet<Santier> Santiere { get; set; }
        public DbSet<Utilizator> Utilizatori { get; set; }  // - daca il sterg at trebuie sters controlerul si pagina de utilizatori
        public AngajatDBContext(DbContextOptions<AngajatDBContext> options)
      : base(options)
        {  }

       

    }
}

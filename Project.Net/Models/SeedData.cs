using Microsoft.CodeAnalysis.CSharp.Syntax;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using System;
using System.Collections.Generic;
using System.Globalization;
using System.Linq;
using System.Threading.Tasks;

namespace Project.Net.Models
{
    public class SeedData
    {
        public static void Initialize(IServiceProvider serviceProvider)
        {
            using (var context = new AngajatDBContext(serviceProvider.GetRequiredService<DbContextOptions<AngajatDBContext>>()))
            {
                if (!context.Utilizatori.Any())
                {
                    context.Utilizatori.Add(new Utilizator
                    {
                        Nume = "First",
                        Prenume = "Last",
                        User = "FirstUsername",
                        Parola = "parolasigura" // HashUtils.GetHashString("parolasigura")
                    });
                    context.SaveChanges();
                }

                // Look for any flowers.
                if (context.Angajati.Any())
                {
                    return;   // DB table has been seeded
                }

                context.Angajati.AddRange(
                    new Angajat
                    {
                    //    Id_Angajat = 1,

                        Nume = "test ",

                        Data = DateTime.Now,

                        Ora_Start = new TimeSpan(10, 2, 3),

                        Ora_Stop = new TimeSpan(11, 2, 4),

                        Pauza = new TimeSpan(0, 3, 0)
                    },
                     new Angajat
                     {
                        // Id_Angajat = 2,

                         Nume = "test 2 ",

                         Data = DateTime.Now,

                         Ora_Start = new TimeSpan(10, 2, 3),

                         Ora_Stop = new TimeSpan(11, 2, 4),

                         Pauza = new TimeSpan(0, 3, 0)
                     }



                );
                context.SaveChanges();
            }
        }
    }
}
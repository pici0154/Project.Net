using Project.Net.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Project.Net.ViewModels
{
    public class SantierePentruAngajati
    {
        public string Locatie { get; set; }
        public string Nume_Santier { get; set; }

        public static SantierePentruAngajati FromSantier(Santier santier)
        {
            return new SantierePentruAngajati
            {
                Locatie = santier.Locatie,
                Nume_Santier = santier.Nume_Santier
            };
        }
    }
}

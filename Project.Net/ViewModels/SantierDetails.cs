using Project.Net.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Project.Net.ViewModels
{
    public class SantierDetails
    {
        public long Id_Santier { get; set; }
        public string Locatie { get; set; }
        public string Nume_Santier { get; set; }
        public List<AngajatiDetails> Angajati { get; set; }


        public static SantierDetails FromSantier(Santier santier)
        {
            return new SantierDetails
            {
                Id_Santier = santier.Id_Santier,
                Locatie = santier.Locatie,
                Nume_Santier = santier.Nume_Santier,
                Angajati = santier.Angajati.Select(c => AngajatiDetails.FromAngajat(c)).ToList()
            };
        }
    }
}

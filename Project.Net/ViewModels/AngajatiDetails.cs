using Project.Net.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Project.Net.ViewModels
{
    public class AngajatiDetails
    {
        public long Id_Angajat { get; set; }
        public string Nume { get; set; }

        public DateTime Data { get; set; }

        public DateTime Ora_Start { get; set; }

        public DateTime Ora_Stop { get; set; }

        public DateTime Pauza { get; set; }
        public long Ore_Lucrate { get; set; }

        public Utilizator AdaugatDe { get; set; }

        public Santier Santier { get; set; }



        public static AngajatiDetails FromAngajat(Angajat angajat) => new AngajatiDetails
        {
            Id_Angajat = angajat.Id_Angajat,
            Nume = angajat.Nume,
            Data = angajat.Data,
            Ora_Start = angajat.Ora_Start,
            Ora_Stop = angajat.Ora_Stop,
            Pauza = angajat.Pauza,
            Ore_Lucrate = angajat.Ore_Lucrate,
            AdaugatDe = angajat.AdaugatDe,
            //Santier = angajat.Santier,
            //   Santiere = angajat.Santier.Select(c => SantierePentruAngajati.FromSantier(c)).ToList()
        };


    }
}

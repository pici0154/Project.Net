using Project.Net.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Project.Net.ViewModels
{
    public class AngajatiDetalii
    {
        public long Id_Angajat { get; set; }
        public string Nume { get; set; }

        public DateTime Data { get; set; }

        public TimeSpan Ora_Start { get; set; }

        public TimeSpan Ora_Stop { get; set; }

        public TimeSpan Pauza { get; set; }

        public Utilizator AdaugatDe { get; set; }

        public List<SantierePentruAngajati> Santiere { get; set; }



        public static AngajatiDetalii FromSantier(Angajat angajat)
        {
            return new AngajatiDetalii
            {
                Id_Angajat = angajat.Id_Angajat,
                Nume = angajat.Nume,
                Data = angajat.Data,
                Ora_Start = angajat.Ora_Start,
                Ora_Stop = angajat.Ora_Stop,
                Pauza = angajat.Pauza,
                AdaugatDe = angajat.AdaugatDe,
                Santiere = angajat.Santier.Select(c => SantierePentruAngajati.FromSantier(c)).ToList()
            };
        }


    }
}

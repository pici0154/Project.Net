﻿using Project.Net.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Project.Net.ViewModels
{
    public class SantierePentruAngajati
    {
        public long Id_Santier { get; set; }
        public string Locatie { get; set; }
        public string Nume_Santier { get; set; }
        
        public long Nr_angajati { get; set; }

        public static SantierePentruAngajati FromSantier(Santier santier)
        {
            return new SantierePentruAngajati
            {
                Id_Santier = santier.Id_Santier,
                Locatie = santier.Locatie,
                Nume_Santier = santier.Nume_Santier,
                Nr_angajati = santier.Angajati.Count,
              
            };
        }
    }
}

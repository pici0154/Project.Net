﻿using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace Project.Net.Models
{
    public class Angajat
    {
        [Key]
        public long Id_Angajat { get; set; }
       
        public string Nume { get; set; }

        public DateTime Data { get; set; }

        public DateTime Ora_Start { get; set; }

        public DateTime Ora_Stop { get; set; }

        public long Ore_Lucrate { get; set; }
         public DateTime Pauza { get; set; }

        public Utilizator AdaugatDe { get; set; }
        public Santier Santier { get; set; }

    }
}

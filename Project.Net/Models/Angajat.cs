using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
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

        public TimeSpan Ora_Start { get; set; }

        public TimeSpan Ora_Stop { get; set; }

        public TimeSpan Pauza { get; set; }

        public Utilizator AdaugatDe { get; set; }

        public List<Santier> Santier { get; set; }
    }
}

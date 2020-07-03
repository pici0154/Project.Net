using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text.Json.Serialization;
using System.Threading.Tasks;

namespace Project.Net.Models
{
    public class Utilizator
    {
        [Key]
        public long Id { get; set; }
        public string Nume { get; set; }
        public string Prenume { get; set; }
        public string User{ get; set; }

       public string Parola { get; set; }
    }
}

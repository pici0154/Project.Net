using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace Project.Net.Models
{
    public class Santier
    {
        [Key]
        public long Id_Santier { get; set; }

        public string Locatie { get; set; }
        public string Nume_Santier{ get; set; }
       
        public Angajat Angajat { get; set; }
        public Utilizator User { get; set; }
       

        
    }
}

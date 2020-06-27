using FluentValidation;
using Project.Net.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Project.Net.ModelValidators
{
    public class AngajatValidator : AbstractValidator<Angajat>
    {
		public AngajatValidator(AngajatDBContext context)
		{
			RuleFor(x => x.Nume).NotNull();

			 
		}
	}
}

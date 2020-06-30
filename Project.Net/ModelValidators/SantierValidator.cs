using FluentValidation;
using Project.Net.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Project.Net.ModelValidators
{
	public class SantierValidator : AbstractValidator<Santier>
	{
		public SantierValidator(AngajatDBContext context)
		{
			RuleFor(x => x.Locatie).NotEmpty()
								.WithMessage("Va rugam completati locatia!");
			RuleFor(x => x.Nume_Santier).NotEmpty()
								.WithMessage("Va rugam completati denumirea santierului");


		}
	}
}


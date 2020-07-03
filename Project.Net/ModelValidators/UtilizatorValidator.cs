using FluentValidation;
using Project.Net.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Project.Net.ModelValidators
{
    public class UtilizatorValidator : AbstractValidator<Utilizator>
	{
		public UtilizatorValidator(AngajatDBContext context)
		{
			RuleFor(x => x.User).NotEmpty()
								.MinimumLength(4)
								.WithMessage("Utilizatorul nu poate fi gol!");

			RuleFor(x => x.Parola)
								.MinimumLength(4)
								.WithMessage("Parola trebuie sa aiba mai mult de 5 caractere!");


		}
	}
}


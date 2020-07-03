using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Project.Net.Models;
using Project.Net.ViewModels;

namespace Project.Net.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SantiersController : ControllerBase
    {
        private readonly AngajatDBContext _context;

        public SantiersController(AngajatDBContext context)
        {
            _context = context;
        }

        // GET: api/Santiers
        [HttpGet]
        public async Task<ActionResult<IEnumerable<SantierePentruAngajati>>> GetSantiere(
            [FromQuery] string? locatie = null)
        {
            IQueryable<Santier> result = _context.Santiere;

            if (locatie != null)
            {
                result = result.Where(s => s.Locatie.Contains(locatie));
            }

            var resultList = await result
                .Include(f => f.Angajati)
                 .Select(f => SantierePentruAngajati.FromSantier(f))
                .ToListAsync();

            return resultList;
            // return await _context.Santiere.ToListAsync();
        }

        // GET: api/Santiers/5
        [HttpGet("{id}")]
        public async Task<ActionResult<SantierDetails>> GetSantier(long id)
        {
            var santier = await _context
                .Santiere
                .Include(f => f.Angajati)
                .FirstOrDefaultAsync(f => f.Id_Santier == id);

            if (santier == null)
            {
                return NotFound();
            }

            return SantierDetails.FromSantier(santier);




            //   var santier = await _context.Santiere.FindAsync(id);

            //    if (santier == null)
            //    {
            //        return NotFound();
            //   }

            //   return santier;
        }

        // PUT: api/Santiers/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPut("{id}")]
        public async Task<IActionResult> PutSantier(long id, Santier santier)
        {
            if (id != santier.Id_Santier)
            {
                return BadRequest();
            }

            _context.Entry(santier).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!SantierExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/Santiers
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPost]
        public async Task<ActionResult<Santier>> PostSantier(Santier santier)
        {
            _context.Santiere.Add(santier);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetSantier", new { id = santier.Id_Santier }, santier);
        }

        // DELETE: api/Santiers/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<Santier>> DeleteSantier(long id)
        {
            var santier = await _context.Santiere.FindAsync(id);
            if (santier == null)
            {
                return NotFound();
            }

            _context.Santiere.Remove(santier);
            await _context.SaveChangesAsync();

            return santier;
        }

        private bool SantierExists(long id)
        {
            return _context.Santiere.Any(e => e.Id_Santier == id);
        }
    }
}

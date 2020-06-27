using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Project.Net.Models;

namespace Project.Net.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AngajatsController : ControllerBase
    {
        private readonly AngajatDBContext _context;

        public AngajatsController(AngajatDBContext context)
        {
            _context = context;
        }

        // GET: api/Angajats
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Angajat>>> GetAngajati(
             [FromQuery] DateTimeOffset? from = null,
            [FromQuery] DateTimeOffset? to = null)
        {
            //filter by date from - date to 
            IQueryable<Angajat> result = _context.Angajati;

            if (from != null && to != null)
            {
                result = result.Where(c => from <= c.Data && c.Data <= to);
            }
            else if (from == null && to != null)
            {
                result = result.Where(c => c.Data <= to);
            }
            else if (from != null && to == null)
            {
                result = result.Where(c => c.Data >= from);
            }

            var resultList = await result
                .OrderByDescending(f => f.Nume)
                .Include(f => f.Santier)
                // .Select(f => FlowerWithNumberOfComments.FromFlower(f))
                .ToListAsync();
            return resultList;

            // return await _context.Angajati.ToListAsync();
        }

        // GET: api/Angajats/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Angajat>> GetAngajat(long id)
        {
            var angajat = await _context.Angajati.FindAsync(id);

            if (angajat == null)
            {
                return NotFound();
            }

            return angajat;
        }

        // PUT: api/Angajats/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPut("{id}")]
        public async Task<IActionResult> PutAngajat(long id, Angajat angajat)
        {
            if (id != angajat.Id_Angajat)
            {
                return BadRequest();
            }

            _context.Entry(angajat).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!AngajatExists(id))
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

        // POST: api/Angajats
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPost]
        public async Task<ActionResult<Angajat>> PostAngajat(Angajat angajat)
        {
            _context.Angajati.Add(angajat);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetAngajat", new { id = angajat.Id_Angajat }, angajat);
        }

        // DELETE: api/Angajats/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<Angajat>> DeleteAngajat(long id)
        {
            var angajat = await _context.Angajati.FindAsync(id);
            if (angajat == null)
            {
                return NotFound();
            }

            _context.Angajati.Remove(angajat);
            await _context.SaveChangesAsync();

            return angajat;
        }

        private bool AngajatExists(long id)
        {
            return _context.Angajati.Any(e => e.Id_Angajat == id);
        }
    }
}

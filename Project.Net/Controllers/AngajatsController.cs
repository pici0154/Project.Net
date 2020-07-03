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
    public class AngajatsController : ControllerBase
    {
        private readonly AngajatDBContext _context;

        public AngajatsController(AngajatDBContext context)
        {
            _context = context;
        }

        /// <summary>
        /// Get a list of all Employees. The list can be fitered by date ( from - to ).
        /// </summary>
        /// <param name="from"> Filter employees by date from. If the parameter is empty, all the employees will be displayed </param>
        /// <param name="to"> Filter employees by date to. If the parameter is empty, all the employees will be displayed</param>
        /// <returns>A list of employees</returns>
        // GET: api/CostItems
        // GET: api/Angajats
        [HttpGet]
        public async Task<ActionResult<IEnumerable<AngajatiDetails>>> GetAngajati(
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
               // .Include(f => f.Santier)
                 .Select(f => AngajatiDetails.FromAngajat(f))
                .ToListAsync();

            return resultList;

            //      return await _context.Angajati.ToListAsync();
        }

        /// <summary>
        /// Get a specific Employee. 
        /// <returns>Returns the searched employee</returns>
        // GET: api/Angajats/5
        [HttpGet("{id}")]
        public async Task<ActionResult<AngajatiDetails>> GetAngajat(long id)
        {
            var angajat = await _context
                                    .Angajati
                                   // .Include(a => a.Santier )
                                    .FirstOrDefaultAsync(a => a.Id_Angajat == id);

            if (angajat == null)
            {
                return NotFound();
            }

            return AngajatiDetails.FromAngajat(angajat);

            /*
            var angajat = await _context.Angajati.FindAsync(id);

            if (angajat == null)
            {
                return NotFound();
            }

            return angajat;
*/
        }

        /// <summary>
        /// Update a specific Employee. 
        /// <returns>Update the given employee</returns>
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

        /// <summary>
        /// Create a specific Employee. 
        /// <returns> Creates the given employee</returns>
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

        /// <summary>
        /// Delete a specific Employee. 
        /// <returns> Return a list of employees, without the deleted employee.</returns>
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

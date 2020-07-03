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
    public class UtilizatorsController : ControllerBase
    {
        private readonly AngajatDBContext _context;

        public UtilizatorsController(AngajatDBContext context)
        {
            _context = context;
        }

        /// <summary>
        /// Get a list of all Users.  
        /// </summary>
        /// /// <param name="nume"> Filter users by name. If the parameter is empty, all the users will be displayed </param>
        /// <returns>A list of users</returns>
        // GET: api/Utilizators
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Utilizator>>> GetUtilizatori([FromQuery] String? prenume = null)
        {
            //filter by prenume
            IQueryable<Utilizator> result = _context.Utilizatori;

            if (prenume != null)
            {
                result = result.Where(c => c.Prenume.Contains(prenume));
            }

            var resultList = await result.ToListAsync();

            return resultList;



            //  return await _context.Utilizatori.ToListAsync();
        }

        /// <summary>
        /// Get a specific user. 
        /// </summary>
        /// <returns>The requested user</returns>
        // GET: api/Utilizators/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Utilizator>> GetUtilizator(long id)
        {
            var utilizator = await _context.Utilizatori.FindAsync(id);

            if (utilizator == null)
            {
                return NotFound();
            }

            return utilizator;
        }
        /// <summary>
        /// Update a specific user.
        /// </summary>
        /// <returns>User with the updated data</returns>
        // PUT: api/Utilizators/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPut("{id}")]
        public async Task<IActionResult> PutUtilizator(long id, Utilizator utilizator)
        {
            if (id != utilizator.Id)
            {
                return BadRequest();
            }

            _context.Entry(utilizator).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!UtilizatorExists(id))
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
        /// Create a new user.
        /// </summary>
        /// <returns>Creates a new user.<returns>
        // POST: api/Utilizators
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPost]
        public async Task<ActionResult<Utilizator>> PostUtilizator(Utilizator utilizator)
        {
            _context.Utilizatori.Add(utilizator);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetUtilizator", new { id = utilizator.Id }, utilizator);
        }

        /// <summary>
        /// Delete a specific user.
        /// </summary>
        /// <returns>Delete the specific user.<returns>
        // DELETE: api/Utilizators/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<Utilizator>> DeleteUtilizator(long id)
        {
            var utilizator = await _context.Utilizatori.FindAsync(id);
            if (utilizator == null)
            {
                return NotFound();
            }

            _context.Utilizatori.Remove(utilizator);
            await _context.SaveChangesAsync();

            return utilizator;
        }

        private bool UtilizatorExists(long id)
        {
            return _context.Utilizatori.Any(e => e.Id == id);
        }
    }
}

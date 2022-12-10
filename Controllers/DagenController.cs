using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace Testing.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class DagenController : ControllerBase
    {
        private readonly PretparkContext _context;

        public DagenController(PretparkContext context)
        {
            _context = context;
        }

        // GET: api/Dagen
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Dag>>> GetDays()
        {
          if (_context.Days == null)
          {
              return NotFound();
          }
            return await _context.Days.ToListAsync();
        }

        // GET: api/Dagen/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Dag>> GetDag(int id)
        {
          if (_context.Days == null)
          {
              return NotFound();
          }
            var dag = await _context.Days.FindAsync(id);

            if (dag == null)
            {
                return NotFound();
            }

            return dag;
        }

        // PUT: api/Dagen/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutDag(int id, Dag dag)
        {
            if (id != dag.Id)
            {
                return BadRequest();
            }

            _context.Entry(dag).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!DagExists(id))
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

        // POST: api/Dagen
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Dag>> PostDag(Dag dag)
        {
          if (_context.Days == null)
          {
              return Problem("Entity set 'PretparkContext.Days'  is null.");
          }
            _context.Days.Add(dag);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetDag", new { id = dag.Id }, dag);
        }

        // DELETE: api/Dagen/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteDag(int id)
        {
            if (_context.Days == null)
            {
                return NotFound();
            }
            var dag = await _context.Days.FindAsync(id);
            if (dag == null)
            {
                return NotFound();
            }

            _context.Days.Remove(dag);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool DagExists(int id)
        {
            return (_context.Days?.Any(e => e.Id == id)).GetValueOrDefault();
        }
    }
}

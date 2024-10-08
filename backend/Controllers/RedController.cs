using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ProyectoBackend.Models;
using ProyectoBackend.Data;


namespace ProyectoBackend.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class RedController : ControllerBase
    {
        private readonly AplicationDBContext _context;
        public RedController(AplicationDBContext context)
        {
            _context = context;
        }

        // GET all
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Red>>> GetRedes()
        {
            return await _context.Redes.ToListAsync();
        }

        // GET 1
        [HttpGet("{id}")]
        public async Task<ActionResult<Red>> GetRed(int id)
        {
            var red = await _context.Redes.FindAsync(id);

            if (red == null)
            {
                return NotFound();
            }

            return red;
        }   


         // POST: api/Redes
        [HttpPost]
        public async Task<ActionResult<Red>> PostRed(Red red)
        {
            // Obtener el último ID disponible y sumarle 1
            //int maxId = _context.Redes.Max(r => r.Idr);
            //red.Idr = maxId + 1;
            
            _context.Redes.Add(red);
            await _context.SaveChangesAsync();

            return CreatedAtAction(nameof(GetRed), new { id = red.Idr }, red);
        }

        // PUT: api/Redes/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutRed(int id, Red red)
        {
            if (id != red.Idr)
            {
                return BadRequest();
            }

            _context.Entry(red).State = EntityState.Modified;
            await _context.SaveChangesAsync();

            return NoContent();
        }

        // DELETE: api/Redes/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteRed(int id)
        {
            var red = await _context.Redes.FindAsync(id);
            if (red == null)
            {
                return NotFound();
            }

            _context.Redes.Remove(red);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool RedExists(int id)
        {
            return _context.Redes.Any(e => e.Idr == id);
        }
    }
}
    

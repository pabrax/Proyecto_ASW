using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ProyectoBackend.Models;
using ProyectoBackend.Data;

namespace ProyectoBackend.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class RedDocenteController : ControllerBase
    {
        private readonly AplicationDBContext _context;
        public RedDocenteController(AplicationDBContext context)
        {
            _context = context;
        }

        // GET all
        [HttpGet]
        public async Task<ActionResult<IEnumerable<RedDocente>>> GetRedDocentes()
        {
            return await _context.RedDocentes.ToListAsync();
        }

        [HttpGet("{Red}")]
        public async Task<ActionResult<RedDocente>> GetRedDocente(int id)
        {
            var reddocente = await _context.RedDocentes.FindAsync(id);

            if (reddocente == null)
            {
                return NotFound();
            }

            return reddocente;
        }   

        [HttpPost]
        public async Task<ActionResult<RedDocente>> PostRedDocente(RedDocente redDocente)
        {            
            _context.RedDocentes.Add(redDocente);
            await _context.SaveChangesAsync();

            return CreatedAtAction(nameof(GetRedDocente), new { id = redDocente.Red }, redDocente);
        }
        
        [HttpPut("{Red}")]
        public async Task<IActionResult> PutRedDocente(int id, RedDocente redDocente)
        {
            if (id != redDocente.Red)
            {
                return BadRequest();
            }

            _context.Entry(redDocente).State = EntityState.Modified;
            await _context.SaveChangesAsync();

            return NoContent();
        }

        [HttpDelete("{Red}")]
        public async Task<IActionResult> DeleteRedDocente(int id)
        {
            var redDocente = await _context.RedDocentes.FindAsync(id);
            if (redDocente == null)
            {
                return NotFound();
            }

            _context.RedDocentes.Remove(redDocente);
            await _context.SaveChangesAsync();

            return NoContent();
        }

    }
}
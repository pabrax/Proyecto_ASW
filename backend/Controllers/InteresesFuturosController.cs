using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ProyectoBackend.Data;
using ProyectoBackend.Models;

namespace ProyectoBackend.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class InteresesFuturosController : ControllerBase
    {
        private readonly AplicationDBContext _context;
        public InteresesFuturosController(AplicationDBContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<InteresesFuturos>>> GetInteresesFuturos()
        {
            return await _context.InteresesFuturos.ToListAsync();
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<InteresesFuturos>> GetInteresesFuturos(int id)
        {
            var interesesFuturos = await _context.InteresesFuturos.FindAsync(id);

            if (interesesFuturos == null)
            {
                return NotFound();
            }

            return interesesFuturos;
        }

        [HttpPost]

        public async Task<ActionResult<InteresesFuturos>> PostInteresesFuturos(InteresesFuturos interesesFuturos)
        {
            _context.InteresesFuturos.Add(interesesFuturos);
            await _context.SaveChangesAsync();

            return CreatedAtAction(nameof(GetInteresesFuturos), new { id = interesesFuturos.Docente }, interesesFuturos);
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> PutInteresesFuturos(int id, InteresesFuturos interesesFuturos)
        {
            if (id != interesesFuturos.Docente)
            {
                return BadRequest();
            }

            _context.Entry(interesesFuturos).State = EntityState.Modified;
            await _context.SaveChangesAsync();
            return NoContent();
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteInteresesFuturos(int id)
        {
            var interesesFuturos = await _context.InteresesFuturos.FindAsync(id);
            if (interesesFuturos == null)
            {
                return NotFound();
            }

            _context.InteresesFuturos.Remove(interesesFuturos);
            await _context.SaveChangesAsync();
            return NoContent();
        }
    }
}
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ProyectoBackend.Data;
using ProyectoBackend.Models;

namespace ProyectoBackend.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class AlianzaController : ControllerBase
    {
        private readonly AplicationDBContext _context;

        public AlianzaController(AplicationDBContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<Alianza>>> GetAlianzas()
        {
            return await _context.Alianzas.ToListAsync();
        }

        [HttpGet("{aliado}")]
        public async Task<ActionResult<Alianza>> GetAlianza(int aliado)
        {
            var alianza = await _context.Alianzas.FindAsync(aliado);

            if (alianza == null)
            {
                return NotFound();
            }

            return alianza;
        }

        [HttpPost]
        public async Task<ActionResult<Alianza>> PostAlianza(Alianza alianza)
        {
            _context.Alianzas.Add(alianza);
            await _context.SaveChangesAsync();
            return CreatedAtAction(nameof(GetAlianza), new { aliado = alianza.Aliado }, alianza);
        }

        [HttpPut("{aliado}")]
        public async Task<IActionResult> PutAlianza(int aliado, Alianza alianza)
        {
            if (aliado != alianza.Aliado)
            {
                return BadRequest();
            }

            _context.Entry(alianza).State = EntityState.Modified;
            await _context.SaveChangesAsync();
            return NoContent();
        }

        [HttpDelete("{aliado}")]
        public async Task<IActionResult> DeleteAlianza(int aliado)
        {
            var alianza = await _context.Alianzas.FindAsync(aliado);
            if (alianza == null)
            {
                return NotFound();
            }

            _context.Alianzas.Remove(alianza);
            await _context.SaveChangesAsync();
            return NoContent();
        }
    }
}

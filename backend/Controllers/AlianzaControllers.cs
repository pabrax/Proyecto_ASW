using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ProyectoBackend.Models;
using ProyectoBackend.Data;

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

        [HttpGet("{Aliado}")]
        public async Task<ActionResult<Alianza>> GetAlianza(int id)
        {
            var alianza = await _context.Alianzas.FindAsync(id);

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

            return CreatedAtAction(nameof(GetAlianza), new { id = alianza.Aliado }, alianza);
        }

        [HttpPut("{Aliado}")]
        public async Task<IActionResult> PutAlianza(int id, Alianza alianza)
        {
            if (id != alianza.Aliado)
            {
                return BadRequest();
            }

            _context.Entry(alianza).State = EntityState.Modified;
            await _context.SaveChangesAsync();

            return NoContent();
        }

        [HttpDelete("{Alianza}")]
        public async Task<IActionResult> DeleteAlianza(int id)
        {
            var alianza = await _context.Alianzas.FindAsync(id);
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
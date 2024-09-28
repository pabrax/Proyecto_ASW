using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ProyectoBackend.Data;
using ProyectoBackend.Models;

namespace ProyectoBackend.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ReconocimientoController : ControllerBase
    {
        private readonly AplicationDBContext _context;
        public ReconocimientoController(AplicationDBContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<Reconocimiento>>> GetReconocimientos()
        {
            return await _context.Reconocimientos.ToListAsync();
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Reconocimiento>> GetReconocimiento(int id)
        {
            var reconocimiento = await _context.Reconocimientos.FindAsync(id);

            if (reconocimiento == null)
            {
                return NotFound();
            }
            return reconocimiento;
        }

        [HttpPost]
        public async Task<ActionResult<Reconocimiento>> PostReconocimiento(Reconocimiento reconocimiento)
        {
            _context.Reconocimientos.Add(reconocimiento);
            await _context.SaveChangesAsync();
            return CreatedAtAction(nameof(GetReconocimiento), new { id = reconocimiento.Id }, reconocimiento);
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> PutReconocimiento(int id, Reconocimiento reconocimiento)
        {
            if (id != reconocimiento.Id)
            {
                return BadRequest();
            }

            _context.Entry(reconocimiento).State = EntityState.Modified;
            await _context.SaveChangesAsync();
            return NoContent();
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteReconocimiento(int id)
        {
            var reconocimiento = await _context.Reconocimientos.FindAsync(id);
            if (reconocimiento == null)
            {
                return NotFound();
            }

            _context.Reconocimientos.Remove(reconocimiento);
            await _context.SaveChangesAsync();
            return NoContent();
        }
    }
}

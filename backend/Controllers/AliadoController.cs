using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ProyectoBackend.Data;
using ProyectoBackend.Models;

namespace ProyectoBackend.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class AliadoController : ControllerBase
    {
        private readonly AplicationDBContext _context;
        public AliadoController(AplicationDBContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<Aliado>>> GetAliados()
        {
            return await _context.Aliados.ToListAsync();
        }

        [HttpGet("{nit}")]
        public async Task<ActionResult<Aliado>> GetAliado(int nit)
        {
            var aliado = await _context.Aliados.FindAsync(nit);

            if (aliado == null)
            {
                return NotFound();
            }
            return aliado;
        }

        [HttpPost]
        public async Task<ActionResult<Aliado>> PostAliado(Aliado aliado)
        {
            _context.Aliados.Add(aliado);
            await _context.SaveChangesAsync();
            return CreatedAtAction(nameof(GetAliado), new { nit = aliado.Nit }, aliado);
        }

        [HttpPut("{nit}")]
        public async Task<IActionResult> PutAliado(int nit, Aliado aliado)
        {
            if (nit != aliado.Nit)
            {
            return BadRequest();
            }   

            _context.Entry(aliado).State = EntityState.Modified;
            await _context.SaveChangesAsync();
            return NoContent();

        }

        [HttpDelete("{nit}")]
        public async Task<IActionResult> DeleteAliado(int nit)
        {
            var aliado = await _context.Aliados.FindAsync(nit);
            if (aliado == null)
            {
                return NotFound();
            }

            _context.Aliados.Remove(aliado);
            await _context.SaveChangesAsync();
            return NoContent();
        }
    }
}
    

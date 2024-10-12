using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ProyectoBackend.Data;
using ProyectoBackend.Models;

namespace ProyectoBackend.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class EstudiosRealizadosController : ControllerBase
    {
        private readonly AplicationDBContext _context;
        public EstudiosRealizadosController(AplicationDBContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<EstudiosRealizados>>> GetEstudiosRealizados()
        {
            return await _context.EstudiosRealizados.ToListAsync();
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<EstudiosRealizados>> GetEstudiosRealizados(int id)
        {
            var estudiosRealizados = await _context.EstudiosRealizados.FindAsync(id);

            if (estudiosRealizados == null)
            {
                return NotFound();
            }
            return estudiosRealizados;
        }

        [HttpPost]
        public async Task<ActionResult<EstudiosRealizados>> PostEstudiosRealizados(EstudiosRealizados estudiosRealizados)
        {
            _context.EstudiosRealizados.Add(estudiosRealizados);
            await _context.SaveChangesAsync();
            return CreatedAtAction(nameof(GetEstudiosRealizados), new { id = estudiosRealizados.Id }, estudiosRealizados);
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> PutEstudiosRealizados(int id, EstudiosRealizados estudiosRealizados)
        {
            if (id != estudiosRealizados.Id)
            {
                return BadRequest();
            }

            _context.Entry(estudiosRealizados).State = EntityState.Modified;
            await _context.SaveChangesAsync();
            return NoContent();
        }


        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteEstudiosRealizados(int id)
        {
            var estudiosRealizados = await _context.EstudiosRealizados.FindAsync(id);

            if (estudiosRealizados == null)
            {
                return NotFound();
            }

            _context.EstudiosRealizados.Remove(estudiosRealizados);
            await _context.SaveChangesAsync();
            return NoContent();
        }
    }
}
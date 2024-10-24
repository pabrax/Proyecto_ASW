using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ProyectoBackend.Models;
using ProyectoBackend.Data;

namespace ProyectoBackend.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class EvaluacionDocenteControllers : ControllerBase
    {
        private readonly AplicationDBContext _context;
        public EvaluacionDocenteControllers(AplicationDBContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<EvaluacionDocente>>> GetEvaluacionDocentes()
        {
            return await _context.EvaluacionDocentes.ToListAsync();
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<EvaluacionDocente>> GetEvaluacionDocente(int id)
        {
            var evaluacionDocente = await _context.EvaluacionDocentes.FindAsync(id);

            if (evaluacionDocente == null)
            {
                return NotFound();
            }

            return evaluacionDocente;
        }

        [HttpPost]
        public async Task<ActionResult<EvaluacionDocente>> PostEvaluacionDocente(EvaluacionDocente evaluacionDocente)
        {   
            _context.EvaluacionDocentes.Add(evaluacionDocente);
            await _context.SaveChangesAsync();

            return CreatedAtAction(nameof(GetEvaluacionDocente), new { id = evaluacionDocente.Id }, evaluacionDocente);
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> PutEvaluacionDoncente(int id, EvaluacionDocente evaluacionDoncente)
        {
            if (id != evaluacionDoncente.Id)
            {
                return BadRequest();
            }

            _context.Entry(evaluacionDoncente).State = EntityState.Modified;
            await _context.SaveChangesAsync();

            return NoContent();
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteEvaluacionDocente(int id)
        {
            var evaluacionDocente = await _context.EvaluacionDocentes.FindAsync(id);
            if (evaluacionDocente == null)
            {
                return NotFound();
            }

            _context.EvaluacionDocentes.Remove(evaluacionDocente);
            await _context.SaveChangesAsync();

            return NoContent();
        }

    }
}
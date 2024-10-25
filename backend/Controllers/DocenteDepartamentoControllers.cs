using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ProyectoBackend.Models;
using ProyectoBackend.Data;

namespace ProyectoBackend.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class DocenteDepartamentoController : ControllerBase
    {
        private readonly AplicationDBContext _context;

        public DocenteDepartamentoController(AplicationDBContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<DocenteDepartamento>>> GetDocenteDepartamentos()
        {
            return await _context.DocenteDepartamentos.ToListAsync();
        }

        [HttpGet("{docenteId}")]
        public async Task<ActionResult<DocenteDepartamento>> GetDocenteDepartamento(int docenteId)
        {
            var docenteDepartamento = await _context.DocenteDepartamentos
                .Include(dd => dd.Docentes)
                .FirstOrDefaultAsync(dd => dd.Docente == docenteId);

            if (docenteDepartamento == null)
            {
                return NotFound();
            }

            return docenteDepartamento;
        }

        [HttpPost]
        public async Task<ActionResult<DocenteDepartamento>> PostDocenteDepartamento(DocenteDepartamento docenteDepartamento)
        {
            _context.DocenteDepartamentos.Add(docenteDepartamento);
            await _context.SaveChangesAsync();

            return CreatedAtAction(nameof(GetDocenteDepartamento), new { docenteId = docenteDepartamento.Docente }, docenteDepartamento);
        }

        [HttpPut("{docenteId}")]
        public async Task<IActionResult> PutDocenteDepartamento(int docenteId, DocenteDepartamento docenteDepartamento)
        {
            if (docenteId != docenteDepartamento.Docente)
            {
                return BadRequest();
            }

            _context.Entry(docenteDepartamento).State = EntityState.Modified;
            await _context.SaveChangesAsync();

            return NoContent();
        }

        [HttpDelete("{docenteId}")]
        public async Task<IActionResult> DeleteDocenteDepartamento(int docenteId)
        {
            var docenteDepartamento = await _context.DocenteDepartamentos.FindAsync(docenteId);
            if (docenteDepartamento == null)
            {
                return NotFound();
            }

            _context.DocenteDepartamentos.Remove(docenteDepartamento);
            await _context.SaveChangesAsync();

            return NoContent();
        }
    }
}
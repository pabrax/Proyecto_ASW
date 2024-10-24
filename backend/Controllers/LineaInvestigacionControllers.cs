using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ProyectoBackend.Models;
using ProyectoBackend.Data;

namespace ProyectoBackend.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class LineaInvestigacionController : ControllerBase
    {
        private readonly AplicationDBContext _context;
        public LineaInvestigacionController(AplicationDBContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<LineaInvestigacion>>> GetLineaInvestigaciones()
        {
            return await _context.LineaInvestigaciones.ToListAsync();
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<LineaInvestigacion>> GetLineaInvestigacion(int id)
        {
            var lineaInvestigacion = await _context.LineaInvestigaciones.FindAsync(id);

            if (lineaInvestigacion == null)
            {
                return NotFound();
            }

            return lineaInvestigacion;
        }

        [HttpPost]
        public async Task<ActionResult<LineaInvestigacion>> PostLineaInvestigacion(LineaInvestigacion lineaInvestigacion)
        {   
            _context.LineaInvestigaciones.Add(lineaInvestigacion);
            await _context.SaveChangesAsync();

            return CreatedAtAction(nameof(GetLineaInvestigacion), new { id = lineaInvestigacion.id }, lineaInvestigacion);
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> PutLineaInvestigacion(int id, LineaInvestigacion lineaInvestigacion)
        {
            if (id != lineaInvestigacion.id)
            {
                return BadRequest();
            }

            _context.Entry(lineaInvestigacion).State = EntityState.Modified;
            await _context.SaveChangesAsync();

            return NoContent();
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteLineaInvestigacion(int id)
        {
            var lineaInvestigacion = await _context.LineaInvestigaciones.FindAsync(id);
            if (lineaInvestigacion == null)
            {
                return NotFound();
            }

            _context.LineaInvestigaciones.Remove(lineaInvestigacion);
            await _context.SaveChangesAsync();

            return NoContent();
        }








    }
}
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ProyectoBackend.Data;
using ProyectoBackend.Models;

namespace ProyectoBackend.Controllers 
{
    [ApiController]
    [Route("api/[controller]")]
    public class EstudioACController : ControllerBase
    {
        private readonly AplicationDBContext _context;
        public EstudioACController(AplicationDBContext context)
        {
            _context = context;
        }


        [HttpGet]
        public async Task<ActionResult<IEnumerable<EstudioAC>>> GetEstudiosAC()
        {
            return await _context.EstudioACs.ToListAsync();
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<EstudioAC>> GetEstudioAC(int id)
        {
            var estudioAC = await _context.EstudioACs.FindAsync(id);

            if (estudioAC == null)
            {
                return NotFound();
            }
            return estudioAC;
        }

        [HttpPost]
        public async Task<ActionResult<EstudioAC>> PostEstudioAC(EstudioAC estudioAC)
        {
            
           // Asegúrate de que la entidad principal (EstudiosRealizados) esté siendo rastreada
            var estudiosRealizados = await _context.EstudiosRealizados.FindAsync(estudioAC.Estudio);
            if (estudiosRealizados == null)
            {
                return BadRequest("EstudiosRealizados no encontrado.");
            }

            // Verifica si ya existe un registro con la misma clave primaria
            var existingEstudioAC = await _context.EstudioACs.FindAsync(estudioAC.Estudio);
            if (existingEstudioAC != null)
            {
                return Conflict("Ya existe un registro con la misma clave primaria.");
            }

            _context.EstudioACs.Add(estudioAC);
            await _context.SaveChangesAsync();
            return CreatedAtAction(nameof(GetEstudioAC), new { id = estudioAC.Estudio }, estudioAC);
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> PutEstudioAC(int id, EstudioAC estudioAC)
        {
            if (id != estudioAC.Estudio)
            {
                return BadRequest();
            }

            _context.Entry(estudioAC).State = EntityState.Modified;
            await _context.SaveChangesAsync();
            return NoContent();
        }


        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteEstudioAC(int id)
        {
            var estudioAC = await _context.EstudioACs.FindAsync(id);
            if (estudioAC == null)
            {
                return NotFound();
            }

            _context.EstudioACs.Remove(estudioAC);
            await _context.SaveChangesAsync();
            return NoContent();
        }

    }
}
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
            // aqui
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
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ProyectoBackend.Data;
using ProyectoBackend.Models;

namespace ProyectoBackend.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ApoyoProfesoralController : ControllerBase
    {
        private readonly AplicationDBContext _context;
        public ApoyoProfesoralController(AplicationDBContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<ApoyoProfesoral>>> GetApoyosProfesorales()
        {
            return await _context.ApoyosProfesorales.ToListAsync();
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<ApoyoProfesoral>> GetApoyoProfesoral(int id)
        {
            var apoyoProfesoral = await _context.ApoyosProfesorales.FindAsync(id);

            if (apoyoProfesoral == null)
            {
                return NotFound();
            }

            return apoyoProfesoral;
        }

        [HttpPost]
        public async Task<ActionResult<ApoyoProfesoral>> PostApoyoProfesoral(ApoyoProfesoral apoyoProfesoral)
        {
            _context.ApoyosProfesorales.Add(apoyoProfesoral);
            await _context.SaveChangesAsync();

            return CreatedAtAction(nameof(GetApoyoProfesoral), new { id = apoyoProfesoral.Estudios }, apoyoProfesoral);
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> PutApoyoProfesoral(int id, ApoyoProfesoral apoyoProfesoral)
        {
            if (id != apoyoProfesoral.Estudios)
            {
                return BadRequest();
            }

            _context.Entry(apoyoProfesoral).State = EntityState.Modified;
            await _context.SaveChangesAsync();
            return NoContent();
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteApoyoProfesoral(int id)
        {
            var apoyoProfesoral = await _context.ApoyosProfesorales.FindAsync(id);
            if (apoyoProfesoral == null)
            {
                return NotFound();
            }

            _context.ApoyosProfesorales.Remove(apoyoProfesoral);
            await _context.SaveChangesAsync();
            return NoContent();
        }
    }
}
    

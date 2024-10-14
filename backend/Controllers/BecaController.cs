using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ProyectoBackend.Data;
using ProyectoBackend.Models;

namespace ProyectoBackend.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class BecaController : ControllerBase
    {
        private readonly AplicationDBContext _context;
        public BecaController(AplicationDBContext context)
        {
            _context = context;
        }
        
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Beca>>> GetBecas()
        {
            return  await _context.Becas.ToListAsync();
        }


        [HttpGet("{estudios}")]
        public async Task<ActionResult<Beca>> GetBeca(int estudios)
        {
            var beca = await _context.Becas.FindAsync(estudios);

            if (beca == null)
            {
            return NotFound();
            }
            return beca;
        }

        [HttpPost]
        public async Task<ActionResult<Beca>> PostBeca(Beca beca)
        {
            _context.Becas.Add(beca);
            await _context.SaveChangesAsync();

            return CreatedAtAction(nameof(GetBeca), new { estudios = beca.Estudios}, beca);
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> PutBeca(int id, Beca beca)
        {
            if (id != beca.Estudios)
            {
            return BadRequest();
            }

            _context.Entry(beca).State = EntityState.Modified;
            await _context.SaveChangesAsync();
            return NoContent();

            /*
            try
            {
                await _context.SaveChangesAsync();
            }
            catch(DbUpdateConcurrencyException)
            {
                if(!BecaExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }
            */
        }

        //Metodo auxiliar
        private bool BecaExists(int id)
        {
            return _context.Becas.Any(b => b.Estudios == id);
        }

        [HttpDelete("{estudios}")]
        public async Task<IActionResult> DeleteBeca(int estudios)
        {
            var beca = await _context.Becas.FindAsync(estudios);
            if (beca == null)
            {
                return NotFound();
            }

            _context.Becas.Remove(beca);
            await _context.SaveChangesAsync();

            return NoContent();
        }


    }
}
    

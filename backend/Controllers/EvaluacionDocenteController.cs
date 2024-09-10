using Microsoft.AspNetCore.Mvc;

namespace ProyectoBackend.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class EvaluacionDocenteController : ControllerBase
    {
        private readonly MyDbContext _context;
        public EvaluacionDocenteController(MyDbContext context)
        {
            _context = context;
        }
    }
}
    

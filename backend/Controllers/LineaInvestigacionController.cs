using Microsoft.AspNetCore.Mvc;

namespace ProyectoBackend.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class LineaInvestigacionController : ControllerBase
    {
        private readonly MyDbContext _context;
        public LineaInvestigacionController(MyDbContext context)
        {
            _context = context;
        }
    }
}
    

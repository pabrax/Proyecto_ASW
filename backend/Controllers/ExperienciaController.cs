using Microsoft.AspNetCore.Mvc;

namespace ProyectoBackend.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ExperienciaController : ControllerBase
    {
        private readonly MyDbContext _context;
        public ExperienciaController(MyDbContext context)
        {
            _context = context;
        }
    }
}
    

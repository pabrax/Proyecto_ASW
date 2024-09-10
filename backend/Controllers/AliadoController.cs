using Microsoft.AspNetCore.Mvc;

namespace ProyectoBackend.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class AliadoController : ControllerBase
    {
        private readonly MyDbContext _context;
        public AliadoController(MyDbContext context)
        {
            _context = context;
        }
    }
}
    

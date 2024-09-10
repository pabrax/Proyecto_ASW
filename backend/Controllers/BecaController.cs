using Microsoft.AspNetCore.Mvc;

namespace ProyectoBackend.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class BecaController : ControllerBase
    {
        private readonly MyDbContext _context;
        public BecaController(MyDbContext context)
        {
            _context = context;
        }
    }
}
    

using Microsoft.AspNetCore.Mvc;

namespace ProyectoBackend.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class InteresesFuturosController : ControllerBase
    {
        private readonly MyDbContext _context;
        public InteresesFuturosController(MyDbContext context)
        {
            _context = context;
        }
    }
}
    

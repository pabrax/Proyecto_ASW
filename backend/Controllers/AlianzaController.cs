using Microsoft.AspNetCore.Mvc;

namespace ProyectoBackend.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class AlianzaController : ControllerBase
    {
        private readonly MyDbContext _context;
        public AlianzaController(MyDbContext context)
        {
            _context = context;
        }
    }
}
    

using Microsoft.AspNetCore.Mvc;

namespace ProyectoBackend.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ReconocimientoController : ControllerBase
    {
        private readonly MyDbContext _context;
        public ReconocimientoController(MyDbContext context)
        {
            _context = context;
        }
    }
}
    

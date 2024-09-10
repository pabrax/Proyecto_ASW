using Microsoft.AspNetCore.Mvc;

namespace ProyectoBackend.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class DocenteController : ControllerBase
    {
        private readonly MyDbContext _context;
        public DocenteController(MyDbContext context)
        {
            _context = context;
        }
    }
}
    

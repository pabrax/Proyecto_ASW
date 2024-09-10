using Microsoft.AspNetCore.Mvc;

namespace ProyectoBackend.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class EstudioACController : ControllerBase
    {
        private readonly MyDbContext _context;
        public EstudioACController(MyDbContext context)
        {
            _context = context;
        }
    }
}
    

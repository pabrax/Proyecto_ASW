using Microsoft.AspNetCore.Mvc;

namespace ProyectoBackend.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ApoyoProfesoralController : ControllerBase
    {
        private readonly MyDbContext _context;
        public ApoyoProfesoralController(MyDbContext context)
        {
            _context = context;
        }
    }
}
    

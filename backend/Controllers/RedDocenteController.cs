using Microsoft.AspNetCore.Mvc;


namespace ProyectoBackend.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class RedDocenteController : ControllerBase
    {
        private readonly MyDbContext _context;
        public RedDocenteController(MyDbContext context)
        {
            _context = context;
        }
    }
}
    

using Microsoft.AspNetCore.Mvc;

namespace ProyectoBackend.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class EstudiosRealizadosController : ControllerBase
    {
        private readonly MyDbContext _context;
        public EstudiosRealizadosController(MyDbContext context)
        {
            _context = context;
        }
    }
}
    

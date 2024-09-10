using Microsoft.AspNetCore.Mvc;

namespace ProyectoBackend.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class DocenteDepartamentoController : ControllerBase
    {
        private readonly MyDbContext _context;
        public DocenteDepartamentoController(MyDbContext context)
        {
            _context = context;
        }
    }
}
    

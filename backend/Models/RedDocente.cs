#nullable enable
namespace ProyectoBackend.Models
{
    public class RedDocente 
    {
        public int Red { set; get; }
        public int Docente { set; get; }
        public DateTime FechaInicio { set; get; }
        public string FechaFin { set; get; }
        public string ActDestacadas { set; get; }

        public Red red {set;get ;}
    }
}
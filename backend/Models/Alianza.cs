#nullable enable

namespace ProyectoBackend.Models
{
    public class Alianza
    {
        public int Aliado { set; get; }
        public int Departamento { set; get; }
        public DateTime FechaInicio { set; get; }
        public DateTime FechaFin { set; get; }

        public Docente Docente { set; get; }

        
    }
}
#nullable enable

namespace ProyectoBackend.Models
{
    public class Experiencia
    {
        public int Id { set; get; }
        public string NombreCargo { set; get; }
        public string Institucion { set; get; }
        public string Tipo { set; get; }
        public DateTime FechaInicio { set; get; }
        public DateTime FechaFin { set; get; }
        public int DocenteId { set; get; }
        public Docente Docente { set; get; }

    }
}
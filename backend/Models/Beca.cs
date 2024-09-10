#nullable enable
namespace ProyectoBackend.Models
{
    public class Beca
    {
        public int Estudios { set; get; }
        public string Tipo { set; get; }
        public string Institucion { set; get; }
        public DateTime FechaInicio { set; get; }
        public DateTime FechaFin { set; get; }

        public EstudiosRealizados estudiosRealizados { set; get; }
    }
}
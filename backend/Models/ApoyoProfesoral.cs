#nullable enable
namespace ProyectoBackend.Models
{
    public class ApoyoProfesoral
    {
        public int Estudios { set; get; }
        public bool ConApoyo { set; get; }
        public string Institucion { set; get; }
        public string Tipo { set; get; }

        public EstudiosRealizados estudiosrealizados { set; get; }
    }
}
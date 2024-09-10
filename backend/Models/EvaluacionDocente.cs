#nullable enable

namespace ProyectoBackend.Models
{
    public class EvaluacionDocente
    {
        public int Id { set; get; }
        public float Calificacion { set; get; }
        public string Semestre { set; get; }

        public int DocenteId { set; get; }
        public Docente Docente { set; get; }

    }
}
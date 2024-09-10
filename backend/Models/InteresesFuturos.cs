#nullable enable

namespace ProyectoBackend.Models
{
    public class InteresesFuturos
    {
        public int DocenteId { set; get; }
        public string TerminoClave { set; get; }
        public Docente Docente { set; get; }
    }
}
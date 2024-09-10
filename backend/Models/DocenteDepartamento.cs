#nullable enable

namespace ProyectoBackend.Models
{
    public class DocenteDepartamento
    {
        public int DocenteId { set; get; }

        public int Departamento { set; get; }
        public string Dedicacion { set; get; }
        public string Modalidad { set; get; }
        public DateTime FechaIngreso { set; get; }
        public DateTime FechaSalida { set; get; }

        //relationship with Docente
        public Docente Docente { set; get; }

    }
}
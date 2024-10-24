using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace ProyectoBackend.Models 
{
    [Table("DocenteDepartamento", Schema = "knowledge_map_db")]
    public class DocenteDepartamento
    {
        [Key]
        public int Docente { get; set; }    
        public int DepartamentoId { get; set; }
        public string Dedicacion { get; set; }
        public string Modalidad { get; set; }
        public DateTime FechaIngreso { get; set; }
        public DateTime? FechaSalida { get; set; }

        public Docente? Docentes { get; set; }
    }
}
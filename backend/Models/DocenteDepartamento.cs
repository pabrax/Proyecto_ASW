using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace ProyectoBackend.Models 
{
    [Table("Docente_Departamento", Schema = "knowledge_map_db")]
    public class DocenteDepartamento
    {
        [Key]
        public int Docente { get; set; }    
        public int Departamento { get; set; }
        public string Dedicacion { get; set; }
        public string Modalidad { get; set; }
        public DateTime Fecha_Ingreso { get; set; }
        public DateTime? Fecha_Salida { get; set; }

        public Docente? Docentes { get; set; }
    }
}
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace ProyectoBackend.Models 
{
    [Table("Evaluacion_Docente", Schema = "knowledge_map_db")]
    public class EvaluacionDocente
    {
        [Key]
        public int Id { get; set; }
        public double Calificacion { get; set; }
        public string Semestre { get; set; }

        public int Docente { get; set; }
        public Docente? DocenteRel { get; set; }

    }
}
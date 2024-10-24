using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace ProyectoBackend.Models 
{
    [Table("EvaluacionDocente", Schema = "knowledge_map_db")]
    public class EvaluacionDocente
    {
        [Key]
        public int Id { get; set; }
        public float Calificacion { get; set; }
        public string Semestre { get; set; }

        public Docente? DocenteRel { get; set; }

    }
}
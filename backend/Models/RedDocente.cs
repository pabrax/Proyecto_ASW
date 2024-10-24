#nullable enable

using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace ProyectoBackend.Models 
{
    [Table("Red_Docente", Schema = "knowledge_map_db")]

    public class RedDocente
    {
        [Key]
        public int Red { set; get; }
        public int Docente { set; get; }
        public DateTime Fecha_Inicio { set; get; }
        public DateTime Fecha_Fin { set; get; }
        public string Act_Destacadas { set; get; }

        // Relacion
         public Red? RedRel { get; set; }
        
    }
}
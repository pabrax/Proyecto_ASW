#nullable enable
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace ProyectoBackend.Models 
{
    [Table("Intereses_Futuros", Schema = "knowledge_map_db")]
    public class InteresesFuturos {
        [Key, ForeignKey("Docente")]
        public int Docente { get; set; }
        public string Termino_Clave { get; set; }

        //relationships
        public Docente DocenteRel { get; set; }
    }
}
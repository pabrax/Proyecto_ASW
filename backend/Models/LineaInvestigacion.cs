using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace ProyectoBackend.Models 
{
    [Table("LineaInvestigacion", Schema = "knowledge_map_db")]
    public class LineaInvestigacion
    {
        [Key]
        public int id { get; set; }
        public string Nombre { get; set; }
        public string Descripcion { get; set; }

        public ICollection<Docente>? Docentes { get; set; }

    }
}
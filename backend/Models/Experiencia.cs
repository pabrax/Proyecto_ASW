#nullable enable
using System.ComponentModel.DataAnnotations.Schema;

namespace ProyectoBackend.Models
{
    [Table("Experiencia", Schema = "knowledge_map_db")] 
    public class Experiencia
    {
        public int Id { set; get; }
        public string Nombre_Cargo { set; get; }
        public string Institucion { set; get; }
        public string Tipo { set; get; }
        public DateTime Fecha_Inicio { set; get; }
        public DateTime Fecha_Fin { set; get; }
        // public int DocenteId { set; get; }

    }
}
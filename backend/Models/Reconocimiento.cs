#nullable enable
using System.ComponentModel.DataAnnotations.Schema;

namespace ProyectoBackend.Models
{
    [Table("Reconocimiento", Schema = "knowledge_map_db")]
    public class Reconocimiento
    {
        public int Id { set; get; }
        public string Tipo { set; get; }
        public DateTime Fecha { set; get; }
        public string Institucion { set; get; }
        public string Nombre { set; get; }
        public string Ambito { set; get; }
        public int DocenteId { set; get; }

    }
}
#nullable enable
using System.ComponentModel.DataAnnotations.Schema;

namespace ProyectoBackend.Models
{
    [Table("Beca", Schema = "knowledge_map_db")]
    public class Beca
    {
        public int Id { set; get; }
        public int Estudios { set; get; }
        public string Tipo { set; get; }
        public string Institucion { set; get; }
        public DateTime FechaInicio { set; get; }
        public DateTime FechaFin { set; get; }

    }
}
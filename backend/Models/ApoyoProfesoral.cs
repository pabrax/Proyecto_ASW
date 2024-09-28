#nullable enable
using System.ComponentModel.DataAnnotations.Schema;

namespace ProyectoBackend.Models
{
    [Table("ApoyoProfesoral", Schema = "knowledge_map_db")]
    public class ApoyoProfesoral
    {
        public int Id { set; get; }
        public int Estudios { set; get; }
        public bool Con_Apoyo { set; get; }
        public string Institucion { set; get; }
        public string Tipo { set; get; }

    }
}
#nullable enable
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace ProyectoBackend.Models
{
    [Table("Apoyo_Profesoral", Schema = "knowledge_map_db")]
    public class ApoyoProfesoral
    {
        [Key, ForeignKey("Estudios_Realizados")]
        public int Estudios { set; get; }
        public bool Con_Apoyo { set; get; }
        public string Institucion { set; get; }
        public string Tipo { set; get; }

        // relaciones
        public EstudiosRealizados? EstudiosRealizados { set; get;}

    }
}
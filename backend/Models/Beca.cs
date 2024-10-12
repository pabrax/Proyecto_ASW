#nullable enable
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace ProyectoBackend.Models
{
    [Table("Beca", Schema = "knowledge_map_db")]
    public class Beca
    {
        [Key, ForeignKey("Estudios_Realizados")]
        public int Estudios { set; get; }
        public string Tipo { set; get; }
        public string Institucion { set; get; }
        public DateTime Fecha_Inicio { set; get; }
        public DateTime Fecha_Fin { set; get; }

        // relaciones
        public EstudiosRealizados EstudiosRealizados { set; get; }

    }
}
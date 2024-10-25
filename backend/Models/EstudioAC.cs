#nullable enable

using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace ProyectoBackend.Models
{
    [Table("Estudio_AC", Schema = "knowledge_map_db")]
    public class EstudioAC
    {
        [Key, ForeignKey("Estudios_Realizados")]

        public int Estudio { get; set; }
        public int Area_Conocimiento { get; set; }


        //relationships
        public EstudiosRealizados? EstudiosRealizados { set; get; }

    }
}
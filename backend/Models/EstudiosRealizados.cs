#nullable enable
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace ProyectoBackend.Models
{
    [Table("Estudios_Realizados", Schema = "knowledge_map_db")]
    public class EstudiosRealizados
    {
        [Key]
        public int Id {set; get;}
        public string Titulo {set; get;}
        public string Universidad {set; get;}
        public DateTime Fecha {set; get;}
        public string Tipo {set; get;}
        public string Ciudad {set; get;}
        public bool Ins_Acreditada {set; get;}
        public string Metodologia {set; get;}
        public string Perfil_Egresado {set; get;}
        public string Pais {set; get;}


        // relaciones
        // relacion con docente

        public int Docente {set; get;}
        
        [ForeignKey("Docente")]
        public Docente? docenteRel {set; get;}
        

        // relacion con estudio_ac, beca y ApoyoProfesoral
        public Beca? beca {set; get;}
        public ApoyoProfesoral? apoyoProfesoral {set; get;}
        public ICollection<EstudioAC>? estudioACs {set; get;}
    }
}
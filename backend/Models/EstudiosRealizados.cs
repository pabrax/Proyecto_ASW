#nullable enable
using System.ComponentModel.DataAnnotations.Schema;

namespace ProyectoBackend.Models
{
    [Table("EstudiosRealizados", Schema = "knowledge_map_db")]
    public class EstudiosRealizados
    {
        public int Id {set; get;}
        public int Titulo {set; get;}
        public int Universidad {set; get;}
        public int Fecha {set; get;}
        public int Tipo {set; get;}
        public string Ciudad {set; get;}
        public int Docente {set; get;}
        public bool InsAcreditada {set; get;}
        public string Metodologia {set; get;}
        public string PerfilEgresado {set; get;}
        public string Pais {set; get;}

        
    }
}
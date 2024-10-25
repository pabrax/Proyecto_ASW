#nullable enable

using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.Identity.Client;

namespace ProyectoBackend.Models
{
    [Table("Aliaza", Schema = "knowledge_map_db")]
    public class Alianza
    {
        [Key]
        public int Aliado { get; set; }
        public int Departamento { get; set; }
        public DateTime Fecha_Inicio { get; set; }
        public DateTime Fecha_Fin { get; set; }
        public int Docente { get; set; }

        public Docente? DocenteRel { get; set; }     
    }
}
#nullable enable

using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace ProyectoBackend.Models
{
    [Table("Aliado", Schema = "knowledge_map_db")]
    public class Aliado
    {
        [Key]
        public int Nit { set; get; }
        public string RazonSocial { set; get; }
        public string NombreContacto { set; get; }
        public string Correo { set; get; }
        public string Telefono { set; get; }
        public string Ciudad { set; get; }


        
    }
}
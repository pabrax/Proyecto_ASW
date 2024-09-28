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
        public string Razon_social { set; get; }
        public string Nombre_contacto { set; get; }
        public string Correo { set; get; }
        public string Telefono { set; get; }
        public string Ciudad { set; get; }


        
    }
}
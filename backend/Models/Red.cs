#nullable enable

using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace ProyectoBackend.Models 
{
    [Table("Red", Schema = "knowledge_map_db")]
    public class Red 
    {
        [Key]
        public int Idr { set; get; }
        public string Nombre { set; get; }
        public string Url { set; get; }
        public string Pais { set; get; }
    
    }

}
#nullable enable


using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace ProyectoBackend.Models
{
    [Table("EstudiosRealizados", Schema = "knowledge_map_db")]
    public class Docente {
        // cedular, nombres, apellidos, genero, cargo, fecha_nacimiento, correo, telefono, url_cvlac, fecha_actualizacion, escalafon, perfil, cat_minciencia, conv_minciencia, nacionalidad, linea_investigacion
        [Key]
        public int Cedula { get; set; }
        public string Nombres { get; set; }
        public string Apellidos { get; set; }
        public string Genero { get; set; }
        public string Cargo { get; set; }
        public DateTime Fecha_Nacimiento { get; set; }
        public string Correo { get; set; }
        public string Telefono { get; set; }
        public string Url_Cvlac { get; set; }
        public DateTime Fecha_Actualizacion { get; set; }
        public string Escalafon { get; set; }
        public string Perfil { get; set; }
        public string Cat_Minciencia { get; set; }
        public string Conv_Minciencia { get; set; }
        public string Nacionalidad { get; set; }
        
        
        // (Al ser una foranea de otro modulo se omite la relacion y se coloca como un valor cualquiera)
        public string Linea_Investigacion { get; set; }


        // relaciones
        public ICollection<EstudiosRealizados> EstudiosRealizados { get; set; }
        
        public ICollection<InteresesFuturos> InteresesFuturos { get; set; }

    }
    
}
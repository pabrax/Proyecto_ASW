#nullable enable

namespace ProyectoBackend.Models
{
    public class Docente
    {
        public int Cedula { set; get; }

        public string Nombres { set; get; }
        public string Apellidos { set; get; }
        public string Genero { set; get; }
        public string Cargo { set; get; }
        public DateTime FechaNacimiento { set; get; }
        public string Correo { set; get; }
        public string Telefono { set; get; }
        public string UrlCvlac { set; get; }
        public DateTime FechaActualizacion { set; get; }
        public string Escalafon { set; get; }
        public string Perfil { set; get; }
        public string CatMinciencia { set; get; }
        public string ConvMinciencia { set; get; }
        public string Nacionalidad { set; get; }
        public int LineaInvestigacionPrincipal { set; get; }

        //relationship with Docente
        public LineaInvestigacion LineaIvestigacion { set; get; }

    }
}
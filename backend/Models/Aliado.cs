#nullable enable

namespace ProyectoBackend.Models
{
    public class Aliado
    {
        public int Nit { set; get; }
        public string RazonSocial { set; get; }
        public string NombreContacto { set; get; }
        public string Correo { set; get; }
        public string Telefono { set; get; }
        public string Ciudad { set; get; }

        ICollection<Alianza> Alianzas { set; get; }

        
    }
}
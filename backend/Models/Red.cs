#nullable enable

namespace ProyectoBackend.Models 
{
    public class Red 
    {
        public int Idr { set; get; }
        public string Nombre { set; get; }
        public string Url { set; get; }
        public string Pais { set; get; }
    
        ICollection<RedDocente> RedDocenteNav {set; get;}

    }

}
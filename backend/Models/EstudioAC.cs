#nullable enable
namespace ProyectoBackend.Models
{
    public class EstudioAC 
    {
        public int Estudio { set; get; }
        public int AreaConocimineto { set; get; }
        
        public EstudiosRealizados EstudiosRealizados { set; get; }
    }
}
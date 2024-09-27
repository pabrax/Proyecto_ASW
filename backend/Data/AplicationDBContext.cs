using Microsoft.EntityFrameworkCore;

using ProyectoBackend.Models;

namespace ProyectoBackend.Data
{
    public class AplicationDBContext: DbContext
    {
        public AplicationDBContext(DbContextOptions<AplicationDBContext> options): base(options){

        }

        // primera entrega
        public DbSet<Red> Redes { get; set; }
        public DbSet<Reconocimiento> Reconocimientos { get; set; }

        public DbSet<Beca> Becas { get; set; }
        public DbSet<Aliado> Aliados { get; set; }
        public DbSet<ApoyoProfesoral> ApoyoProfesorals { get; set; }
        public DbSet<Experiencia> Experiencias { get; set; }
        public DbSet<EstudiosRealizados> EstudiosRealizados { get; set; }

        // public DbSet<RedDocente> RedDocentes { get; set; }
        // public DbSet<Alianza> Alianzas { get; set; }
        // public DbSet<Docente> Docentes { get; set; }
        // public DbSet<DocenteDepartamento> DocenteDepartamentos { get; set; }
        // public DbSet<Entidad> Entidads { get; set; }
        // public DbSet<EstudioAC> EstudioACs { get; set; }
        // public DbSet<EvaluacionDocente> EvaluacionDocentes { get; set; }
        // public DbSet<InteresesFuturos> InteresesFuturos { get; set; }
        // public DbSet<LineaInvestigacion> LineaInvestigacions { get; set; }


        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);
        }
    }

}

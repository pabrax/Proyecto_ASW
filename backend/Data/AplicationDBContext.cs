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

        public DbSet<Aliado> Aliados { get; set; }
        public DbSet<ApoyoProfesoral> ApoyosProfesorales { get; set; }
        public DbSet<Experiencia> Experiencias { get; set; }

        public DbSet<EstudiosRealizados> EstudiosRealizados { get; set; }
        public DbSet<Beca> Becas { get; set; }

        // segunda entrega
        public DbSet<Docente> Docentes { get; set; }
        public DbSet<EstudioAC> EstudioACs { get; set; }
        public DbSet<InteresesFuturos> InteresesFuturos { get; set; }
        public DbSet<RedDocente> RedDocentes { get; set; }
        public DbSet<EvaluacionDocente> EvaluacionDocentes { get; set; }
        public DbSet<DocenteDepartamento> DocenteDepartamentos { get; set; }
        public DbSet<Alianza> Alianzas { get; set; }
        public DbSet<LineaInvestigacion> LineaInvestigaciones { get; set; }
        // public DbSet<Entidad> Entidades { get; set; }


        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            // relacion uno a muchos: Docente - EstudiosRealizados
            modelBuilder.Entity<EstudiosRealizados>()
            .HasOne(e => e.docenteRel)
            .WithMany(d => d.EstudiosRealizados)
            .HasForeignKey(e => e.Docente)
            .OnDelete(DeleteBehavior.Cascade);

            // relacion uno a uno: EstudiosRealizados - EstudioAC
            modelBuilder.Entity<EstudiosRealizados>()
            .HasOne(e => e.estudioAC)
            .WithOne(eac => eac.EstudiosRealizados)
            .HasForeignKey<EstudioAC>(eac => eac.Estudio)
            .OnDelete(DeleteBehavior.Cascade);

            // relacion uno a uno: EstudiosRealizados - Beca
            modelBuilder.Entity<EstudiosRealizados>()
            .HasOne(e => e.beca)
            .WithOne(b => b.EstudiosRealizados)
            .HasForeignKey<Beca>(b => b.Estudios)
            .OnDelete(DeleteBehavior.Cascade);

            // relacion uno a uno: EstudiosRealizados - ApoyoProfesoral
            modelBuilder.Entity<EstudiosRealizados>()
            .HasOne(e => e.apoyoProfesoral)
            .WithOne(ap => ap.EstudiosRealizados)
            .HasForeignKey<ApoyoProfesoral>(ap => ap.Estudios)
            .OnDelete(DeleteBehavior.Cascade);

            // relacion uno a muchos Docente - InteresesFuturos
            modelBuilder.Entity<InteresesFuturos>()
            .HasOne(i => i.DocenteRel)
            .WithMany(d => d.InteresesFuturos)
            .HasForeignKey(i => i.Docente)
            .OnDelete(DeleteBehavior.Cascade);

            // Relacion uno a muchos red - RedDocente
            modelBuilder.Entity<Red>()
            .HasMany(r => r.RedDocentes)
            .WithOne(rd => rd.RedRel) // Asegúrate de que aquí estés referenciando la propiedad en RedDocente que apunta a Red
            .HasForeignKey(rd => rd.Red) // Usa la propiedad RedId como clave foránea
            .OnDelete(DeleteBehavior.Cascade);


            //Relacion uno a muchos Docente - Evaluacion Docente
            modelBuilder.Entity<Docente>()
            .HasMany(d => d.EvaluacionDocentes)
            .WithOne(ed => ed.DocenteRel)
            .HasForeignKey(ed => ed.DocenteRel)
            .OnDelete(DeleteBehavior.Cascade);

            //Relacion uno a muchos Docente - DocenteDepartamento
            modelBuilder.Entity<Docente>()
            .HasMany(d => d.DocenteDepartamentos)
            .WithOne(dd => dd.Docentes)
            .HasForeignKey(dd => dd.Docentes)
            .OnDelete(DeleteBehavior.Cascade);

            //Relacion uno a muchos Docente - Alianza
            modelBuilder.Entity<Alianza>()
            .HasMany(a => a.Docentes)
            .WithMany(d => d.Alianzas)
            .HasForeignKey(d => d.Alianzas)
            .OnDelete(DeleteBehavior.Cascade);

            //Relacion uno a muchos LineaInvestigacion - Docente
            modelBuilder.Entity<LineaInvestigacion>()
            .HasMany(l => l.Docentes)
            .WithMany(d => d.LineaInvestigaciones)
            .HasForeignKey(d => d.LineaInvestigaciones)
            .OnDelete(DeleteBehavior.Cascade);
        }
    }
}

#!/bin/bash

names=("Aliado" "Alianza" "ApoyoProfesoral" "Beca" "Docente" "DocenteDepartamento" "EstudioAC" "EstudiosRealizados" "EvaluacionDocente" "Experiencia" "InteresesFuturos" "LineaInvestigacion" "Reconocimiento" "Red" "RedDocente")

for name in "${names[@]}"; do
    nameController="${name}Controller"
    echo "
namespace ProyectoBackend.Controllers
{
    [ApiController]
    [Route(\"api/[controller]\")]
    public class ${nameController} : ControllerBase
    {
        private readonly MyDbContext _context;
        public ${nameController}(MyDbContext context)
        {
            _context = context;
        }
    }
}
    " >> "${name}Controller.cs"
done

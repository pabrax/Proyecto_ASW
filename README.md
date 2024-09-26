# proyecto Aplicaciones y Servicios Web

## Indice

Este es el proyecto de la materia de aplicaciones y servicios Web, este proyecto consiste en un servidor (API) creada con .NET Core y c#, basandonos en una base de datos que se propone en el curso, Y un frontend independiente creado en (Angular, Astro).

![database](./docs/modelo%20relacional_v6.png) 

## Instalacion

Para instalar y configurar el proyecto debemos instalar los paquetes necesarios para el funcionamiento tanto del **frontend** como del **backend**

### Requerimientos

- Frontend: nodejs, npm
- Backend: .NET 
- BD: Sql server

### Para configurar el frontend

Primero vamos a la carpeta `frontend/` e instalamos las dependencias con npm

```bash
cd frontend/
npm i
```

**importante:** si tienes instalado angular-cli de forma global solo necesitas ejecutar: 

```bash
ng serve
```

si esto no funciona prueba ejecutando el siguiente comando para ejecutar el proyecto desde el `package.json`

```bash
npm run ng serve
```

para ver mas sobre Angular ver [guia Angular](./frontend_angular/README.md)

### Para configurar el backend

Para configurar e instalar todos los paquetes necesarios debemos movernos a la carpeta `backend/` y por medio de la herramienta `dotnet` restaurar las dependencias.

```bash
dotnet restore
```

luego para ejecutar el proyecto utilizamos 
```bash
dotnet run
```

para ver mas informacion sobre la creacion y uso de `dotnet` ver [Guia Basica .net](./backend/README.md).


## Desarrollo

Para desarrollar tanto en front como en back se recomienda crear una nueva rama con el nombre de la feature y el nombre del autor eg. `feature/autor`


para crear una nueva rama
```bash
git branch frontend-navbar/John-doe
```

para cambiar de rama
```bash
git checkout frontend-navbar/John-doe
```

---



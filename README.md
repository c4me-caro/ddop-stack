
# DDOP Stack

Plantilla para iniciar un proyecto web backend.

## Descripción

El objetivo de esta Plantilla es generar una aplicación web backend tipo API usando Deno, TypeScript, Oak, Docker y PostgreSql, de manera fácil e integrable, con rutas de autenticación y middlewares de JWT ya estipuados.

## Requerimientos

- Deno y Denon
- Docker (opcional)
- PostgreSql


## Instalación

Descargar el proyecto

```bash
  git clone https://github.com/c4me-caro/ddop-stack
  cd ddop-stack
```

Cambiar a la rama requerida
- usar `git checkout restful` para un api rest
- usar `git checkout render` para un api stream

Instalar las dependencias necesarias

```bash
  deno cache deps.ts
```

Iniciar un servidor de prueba

```bash
  deno task start
```


## Ejecución con Docker

### Dockerfile

El **Dockerfile** incluido:
1. Utiliza una imágen de los binarios de deno como base
2. Expone el puerto interno donde escucha la aplicación
3. Copia el proyecto en `/app`
4. Configura y ejecuta la aplicación

Ejecuta el comando de la siguiente manera:

```bash
docker image build -t ddop-service .
docker run -it ddop-service
```

Esto:
- **Construye** la imagen usando el Dockerfile.
- **Inicia** el servicio.

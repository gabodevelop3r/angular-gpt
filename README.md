# Angular GPT 🤖

Aplicación Angular integrada con OpenAI GPT para corrección ortográfica y análisis de texto.

## 📋 Requisitos

- [Docker](https://www.docker.com/get-started) instalado
- [Docker Compose](https://docs.docker.com/compose/install/) instalado

## 🚀 Inicio Rápido

### Desarrollo con Docker

1. **Clonar el repositorio**
```bash
git clone <tu-repositorio>
cd angular-GPT
```

2. **Levantar el contenedor**
```bash
docker-compose up --build
```

3. **Acceder a la aplicación**
```
http://localhost:4200
```

El servidor se recargará automáticamente al detectar cambios en los archivos.

### Desarrollo Local (sin Docker)

```bash
npm install
npm start
```

## 🛠️ Comandos Útiles

### Docker

```bash
# Levantar en modo detached (segundo plano)
docker-compose up -d

# Ver logs
docker-compose logs -f

# Detener contenedores
docker-compose down

# Reconstruir imagen
docker-compose up --build

# Acceder al contenedor
docker exec -it angular-gpt sh
```

### Angular CLI (dentro del contenedor)

```bash
# Entrar al contenedor
docker exec -it angular-gpt sh

# Generar componente
npx ng generate component nombre-componente

# Generar servicio
npx ng generate service nombre-servicio

# Ver versión de Angular
npx ng version

# Build de producción
npx ng build
```

## 📦 Tecnologías

- **Angular** 20.3.0
- **Tailwind CSS** 4.1.16
- **RxJS** 7.8.0
- **OpenAI API** - Integración con GPT-4

## 🐳 Estructura Docker

- **Dockerfile**: Multi-stage con etapas de desarrollo, build y producción
- **docker-compose.yml**: Configuración para desarrollo con hot-reload
- **.dockerignore**: Optimiza el contexto de construcción

## 🏗️ Build de Producción

### Con Docker

```bash
docker build -t angular-gpt:prod --target production .
docker run -p 80:80 angular-gpt:prod
```

Acceder en: `http://localhost`

### Local

```bash
npm run build
```

Los archivos se generan en `dist/angular-gpt/browser/`

## 📝 Notas

- El puerto por defecto es `4200` para desarrollo
- Las variables de entorno deben configurarse según tu API de OpenAI
- El contenedor incluye hot-reload con `--poll` para mejor compatibilidad

## 📄 Licencia

Este proyecto es privado.

FROM node:20-alpine

# Directorio de trabajo dentro del contenedor
WORKDIR /usr/src/app

# Copiamos dependencias primero para aprovechar cache
COPY package*.json ./

# Instalamos dependencias
RUN npm install

# Copiamos el resto del proyecto
COPY . .

# Exponemos el puerto donde corre Angular
EXPOSE 4200

# Comando de desarrollo
CMD ["npm", "start"]

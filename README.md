# FRONTEND

Artefacto que es desplegado como Frontend

## Modificar archivo de configuraciones

Modificar archivo nginx.conf con el host correspondiente al backend.

```sh
location /api {
    proxy_pass http://backend-task:8080/;
    proxy_set_header Host $host;
    proxy_set_header X-Real-IP $remote_addr;
    proxy_set_header X-Forwarded-Proto https;
}
```

## Compilacion

Tener instalado Node.js

```sh
npm install
```
## Ejecucion de forma local

```sh
npm start
```

## Empaquetar y ejecutar imagen Docker
### Crear build
Tener instalado Node.js
```sh
make docker-build
```
### Iniciar imagen Docker
```sh
make doker-up
```
### Reiniciar imagen Docker
```sh
make doker-restart
```
### Eliminar imagen Docker
```sh
make doker-down
```
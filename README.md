# Estructura del Proyecto

## Raíz
- **.env.example**: Variables de entorno de ejemplo.  
- **.gitignore**: Archivos a excluir de git.  
- **package.json**: Dependencias y scripts de Node.js.  
- **Dockerfile**: Imagen de la aplicación.  
- **docker-compose.yml**: Orquestación de servicios.  
- **README.md**: Documentación del proyecto.  
- **eslint.config.js**: Configuración de ESLint.  
- **prettier.config.js**: Configuración de Prettier.  

## src/
- **index.js**: Punto de entrada.  
- **app.js**: Configuración principal de Express.  

### config/
- **config.js**: Variables globales.  
- **db.js**: Conexión a la base de datos.  

### modelos/
Definición de entidades (salón, servicio, turno, reserva, usuario).  

### controladores/
Lógica de negocio y manejo de peticiones.  

### rutas/
Rutas de la API.  

### servicios/
Servicios auxiliares (reservas, correo, PDF).  

### middlewares/
Autenticación, autorización y manejo de errores.  

### validaciones/
Validadores de entrada.  

### utilidades/
Funciones auxiliares.  

### docs/
- **swagger.yaml**: Documentación de la API.  

## sql/
- **migraciones/**: Migraciones de BD.  
- **seeders/**: Datos iniciales.  
- **procedimientos_almacenados.sql**: Procedimientos en SQL.  

## scripts/
- **iniciar_bd.sql**: Script inicial.  
- **seed_inicial.sql**: Datos de prueba.  

## pruebas/
- **unitarias/**: Pruebas unitarias.  
- **integracion/**: Pruebas de integración.  


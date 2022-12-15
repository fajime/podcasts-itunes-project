# Podcast Itunes Project

Es necesario tener instaladas las siguientes herramientas en el entorno local del ordenador donde se quiera ejecutar esta aplicaión:

- Node.js >= v19.2.0
- Git 2.39.0.windows.1

## Los pasos para ejecutar esta prueba son los siguientes:

1. Descargar el proyecto con Git del repositorio:
   `git clone https://github.com/fajime/podcast-project.git`

2. Ubicarse en el directorio raiz del proyecto:
   `cd podcast-itunes-project`

3. Instalar dependencias:
   `npm install`

4. Arrancar la aplicación en la siguiente ruta (http://localhost:3000)
   `npm run start`

## Existen otros scripts disponibles para ejecutar el resto de procesos disponibles:

1. Compilación de la aplicación para despliegue en servidor
   `npm run build`

2. Para realizar un análisis de sintaxis y buenas prácticas sobre el código fuente de la Aplicación
   `npm run lint`

3. Ejecución de Testing
   `npm run test`

## Notas:
1. Ha sido necesario reemplazar el endpoint facilitado en la prueba para obtener el listado de episodios de un podcast ya que no devolvía los resultados esperados.

2. El requerimiento de versionar las subidas de código no se ha podido cumplir por una cuestión de otras obligaciones que me han obligado a desarrollar esta prueba no una forma no convencional pero dispongo a continuación el modelo que se debería haber implantado:
   - git tag -a v0.1 -m "version 0.1" Implementación listado de podcasts
   - git tag -a v0.2 -m "version 0.2" Implementación detalle de podcast con listado de episodios
   - git tag -a v0.3 -m "version 0.3" Implementación detalle de episodio





   
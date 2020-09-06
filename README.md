Estructura base de trabajo

Este es la estructura base de los trabajos de programacion web

Estructura base

 *Carpeta scr
    Dentro de esta carpeta se encuentran las carpetas:
        js: Aqui van todos los archivos .js
        scss Aqui van todos los archivos .scss

 *Carpeta dist
    Dentro de esta carpeta estan los archivos .html
    La carpeta css es donde van todos los archivos css que son resultado del prepocesado de los archivos scss

 *Carpeta build
    Dentro de esta carpeta se encuentran las carpetas:
        css: Contiene todos los archivos css ya minificados
        js: Contiene todos los arcgivos js ya minificados

 *archivo git ignore
   Omite la carpeta node_modules

  *Packge.json
    Contiene la lista de dependencias necesarias para ejecutar el proyecto

Instalacion
    Para ejecurtar el porgrama despues de descargarlo debe de ejecutar * npm install *
    para descargar todas las dependencias necesarias.

Tareas de Automatizacion implementadas
    1. Compilar autometicamete los archivos de sass a css
    2. Servir los archivos html automaticamente en el navegador
    3. Actualizar los cambios en el navegador
    4. Minificacion de archivos css
    5. Ninificacion de archivos js





Para ejecutar el programa se deben ejecutar los siguientes instrucciones:

1) descargar archivo zip de repositorio:
    https://github.com/javieraizq88/formulario-jun-2020

2) descomprimir el archivo

3) abrir carpeta en visual studio code o programa similar (por ejemplo Windows Visual Studio, Vscode, Atom)

4) abrir la terminal

5) ejecutar: (duración entre 2 a 3 minutos aprox)
    npm install 

6) al terminal la instalación, ejecutar 
    npm run start



La arquitectura:
- comienza con un home que muestra el nombre de usuario, los hoteles disponibles segun la base de datos importada. Tiene un boton que despliega un modal con la información del hotel seleccionado, foto, ubicación.
- a mano derecha del home se muestran las notificaciones pendientes con un mensaje corto y al hacer click en "leer" se redirecciona a la pagina de las notificaciones que muestra los mensajes completos segun id del mensaje.
- el dashboard tiene activado el icono de mensaje para poder leerlos todos.
-el sidebar tiene activado el icono de home para volver desde notificaciones

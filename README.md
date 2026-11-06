# Pulso · UGT Sanir Programados

Adaptación de TecniGo, creado por Txuwa, con identidad propia para UGT Sanir Programados.

## Publicar

Descomprime el ZIP y sube todo su contenido a la raíz del repositorio de GitHub Pages o arrastra la carpeta a Netlify. `index.html` debe quedar en la raíz de la carpeta publicada. También admite publicación en una subcarpeta. No requiere compilación ni claves API.

## Esta edición

- Nombre propio Pulso y crédito a la creación original de Txuwa.
- Logos UGT y Comité de empresa Sanir Programado.
- Cabecera corporativa, emblema de pulso, iconos y navegación adaptados a móvil y escritorio.
- Se conservan los seis módulos: oxígeno, Glasgow, Apgar, metrónomo de RCP, ADR y triaje.
- Se conservan las fórmulas, escalas, tablas y contenido asistencial original. Esta adaptación de identidad no supone una revisión clínica de ese contenido.
- Informe de triaje identificado como Pulso · UGT Sanir Programados.
- Estilos locales, sin descarga de Tailwind o fuentes externas al ejecutar la aplicación.
- Instalación web cuando el navegador la ofrezca; en iPhone, Compartir → Añadir a pantalla de inicio.
- Caché local para uso sin conexión tras una primera carga completa y la activación del service worker en HTTPS. La instalación debe comprobarse en el dispositivo de destino.
- Se permite ampliar la pantalla con zoom. El botón de sonido informa de su estado a lectores de pantalla.

## Actualizaciones

Incrementa CACHE_NAME en sw.js para nuevas versiones. La actualización se completa al volver a cargar. El sistema puede requerir renovar el acceso directo para actualizar el icono.

## Estilos

utilities.css se ha generado con Tailwind CSS 3.4.17, distribuido con licencia MIT, incluida en LICENSE-Tailwind.txt. No se necesita Tailwind para publicar o usar los archivos entregados.

## Comprobaciones de la entrega

Comparación con el original: 16 escenarios de oxígeno, 18 de Glasgow y 3 de Apgar; navegación entre los seis módulos, conmutación de sonido, metrónomo y contador de triaje. Verificados los archivos locales y la sintaxis JavaScript. Revisión visual e instalación en un móvil real pendientes.

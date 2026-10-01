PROTOTIPO — ORÁCULO EMOCIONAL DE NEZA
========================================

Qué contiene
------------
index.html              Pantalla inicial.
ar.html                 Experiencia WebAR con MindAR.
fallback.html           Consulta aleatoria sin AR.
predicciones.js         Banco inicial de mensajes.
styles.css              Estilo visual.
assets/target-temporal.jpg
                        Recorte TEMPORAL de la foto actual del mural.
targets/                 Aquí debe ir targets.mind.

PASO 1 — Crear el marcador temporal
-----------------------------------
1. Abre el compilador oficial de MindAR:
   https://hiukim.github.io/mind-ar-js-doc/tools/compile/
2. Sube assets/target-temporal.jpg
3. Pulsa Start.
4. Cuando termine, descarga targets.mind.
5. Copia ese archivo dentro de la carpeta targets/ para que quede:
   targets/targets.mind

IMPORTANTE:
Este marcador sólo es para pruebas. Cuando los alumnos terminen runas y mensajes,
toma una foto FRONTAL, enfocada y bien iluminada del mural final y vuelve a generar
targets.mind usando esa foto.

PASO 2 — Probar
---------------
La cámara del navegador suele requerir HTTPS. Para una prueba seria conviene subir
esta carpeta a un hosting estático (por ejemplo GitHub Pages o Netlify).

Si sólo quieres revisar el aspecto en una computadora puedes abrir index.html, pero
la cámara puede bloquearse si se abre como file://.

PASO 3 — Ajustar posición de la carta
-------------------------------------
En ar.html busca:

position="0 -0.31 0.07"
width="0.76"
height="0.93"

Cuando usemos la fotografía final ajustaremos esos valores para colocar la carta
exactamente sobre el cráneo sin tapar demasiado las manos.

PASO 4 — Editar predicciones
----------------------------
Abre predicciones.js. Cada predicción usa:
- titulo
- serio
- gracioso
- consejo

Se pueden reemplazar por las predicciones creadas por los alumnos.

Flujo final
-----------
QR → index.html → iniciar consulta → cámara → apuntar a Tecnohtemoch →
MindAR reconoce el mural → aparece una carta anclada al mural →
predicción aleatoria.

Plan B
------
Si la AR falla, fallback.html funciona sin marcador y conserva las mismas
predicciones.

NOTA
----
El prototipo usa A-Frame y MindAR desde CDN; por eso necesita conexión a Internet
al abrir la experiencia, salvo que después descarguemos y empaquetemos esas librerías.

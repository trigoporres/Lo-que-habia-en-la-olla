---
name: pendientes
description: Convierte los hallazgos de una revisión que requieren investigar (datos sin respaldo, discrepancias con las notas) en una lista de pendientes dentro de notas/<slug>.md. Úsala después de /revisar-post o /revisar-notas, o cuando el usuario quiera apuntar qué le falta investigar de un post.
argument-hint: <slug>
---

# Pendientes de investigación

Traduce lo que una revisión ha dejado en el aire en tareas concretas de
investigación, anotadas al final de `notas/<slug>.md`, para que no se queden
flotando en un informe por pantalla.

Si no se indica slug, pregunta cuál. Si no existe `notas/<slug>.md`, dilo y no
lo crees.

## De dónde salen los pendientes

Usa los informes de `revisar-lectura`, `revisar-notas` o `revisar-post` que
estén en esta conversación. Si no hay ninguno, no inventes pendientes: pide al
usuario que ejecute `/revisar-post <slug>` o que te cuente qué quiere apuntar.

Distingue dos tipos de hallazgo:

- **Hay que investigar**: un dato del artículo sin respaldo en las notas, una
  discrepancia cuya versión correcta se desconoce, una duda de las notas que el
  artículo afirma como hecho. Estos van a la lista.
- **Hay que reescribir**: un pasaje confuso, un pronombre ambiguo, una
  transición que falta. Se arreglan en el texto, no con investigación. Estos
  **no** van a las notas; menciónalos solo en tu respuesta, en una línea.

## Qué escribir

Añade al final de `notas/<slug>.md`, sin tocar nada de lo que ya hay, una
sección `## Pendientes de investigación` (si ya existe, añade a ella en vez de
duplicarla) con una casilla por tarea:

```
- [ ] <qué comprobar> (artículo, párrafo N: "<cita breve>")
```

Cada tarea debe ser concreta y accionable: qué dato falta o contradice, dónde
aparece en el artículo, y, si las notas ya apuntan a una fuente posible (un
expediente, un libro, un archivo), cuál. No añadas fuentes que no estén en las
notas ni sugieras búsquedas con tu propio conocimiento histórico.

No dupliques: si ya hay una casilla equivalente, sea marcada o no, no la
repitas.

## Salida

Responde en español con cuántos pendientes añadiste, la lista breve, y aparte
los hallazgos de reescritura que dejaste fuera. No hagas commit.

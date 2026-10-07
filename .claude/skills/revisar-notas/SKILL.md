---
name: revisar-notas
description: Coteja un artículo del blog con las notas del autor sobre ese post y detecta discrepancias (fechas, nombres, cifras, hechos) y afirmaciones que las notas no respaldan. No edita nada. Úsala cuando el usuario pida contrastar un post con sus notas.
argument-hint: <slug del artículo>
---

# Revisar contra las notas

Compara `src/content/articles/$ARGUMENTS.mdx` (o `.md`) con las notas del autor
en `notas/$ARGUMENTS.md` y devuelve un informe por pantalla. No edites ningún
fichero.

Si no se indica slug, pregunta cuál. Si no existe `notas/$ARGUMENTS.md`, dilo
y lista qué hay en `notas/`; no busques las notas en otro sitio ni las
inventes.

## Qué buscar

- **Discrepancias**: el artículo y las notas dicen cosas distintas sobre el
  mismo dato (la nota dice que nació en 2020 y el artículo en 1020). Cubre
  fechas, nombres, lugares, cifras, cargos, títulos de obras, orden de
  sucesos y atribuciones de citas.
- **Afirmaciones sin respaldo**: datos o hechos que aparecen en el artículo y
  de los que las notas no dicen nada. No son necesariamente errores, pero el
  autor debe saber que no tienen fuente en sus notas.
- **Matices perdidos**: las notas expresan duda o discrepancia entre fuentes
  ("según unos... según otros...", "posiblemente") y el artículo lo afirma
  como hecho.

## Reglas

- No decidas cuál de las dos versiones es la correcta. Una discrepancia puede
  ser un error del artículo o una nota desactualizada. Presenta ambas con su
  cita literal y deja la decisión al autor.
- No uses tu conocimiento histórico ni busques en la web para resolver la
  discrepancia. Esta revisión solo contrasta el artículo con las notas.
  Si crees que ambas fuentes se equivocan, puedes añadirlo al final como
  aviso aparte, claramente marcado como tu opinión y no como hallazgo.
- Distingue la voz: una licencia narrativa o una metáfora no es una
  discrepancia con las notas. Señala solo datos verificables.

## Formato del informe

Responde en español, en dos secciones:

1. **Discrepancias**: por cada una, el dato, lo que dice el artículo (cita
   literal y párrafo) y lo que dicen las notas (cita literal).
2. **Sin respaldo en las notas**: lista de afirmaciones del artículo que las
   notas no cubren, con cita breve.

Si una sección está vacía, dilo expresamente. Termina con una línea de
balance con los totales.

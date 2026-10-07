---
name: revisar-lectura
description: Lectura crítica de un artículo del blog como lector externo. Detecta contradicciones internas, pasajes confusos o que no se entienden y saltos de lógica, y los devuelve en un informe por pantalla con gravedad. No edita nada. Úsala cuando el usuario pida una lectura crítica o "léelo como lector" de un post.
argument-hint: <slug del artículo>
---

# Revisar lectura

Lee `src/content/articles/$ARGUMENTS.mdx` (o `.md`) como lo haría un lector
interesado en historia pero que no conoce el tema ni al autor, y devuelve un
informe. No edites el fichero.

Si no se indica slug, pregunta cuál.

## Regla fundamental: no leas las notas

No abras `notas/` ni ninguna otra fuente sobre el tema. El valor de esta
revisión es que juzgas el texto solo con lo que dice el texto. Si algo solo se
entiende con las notas, el lector tampoco lo entenderá, y eso es justo lo que
hay que señalar. Tampoco uses tu conocimiento previo para completar huecos: si
el texto no lo explica, es un hallazgo.

Tampoco compares con otros artículos del blog. Cada artículo tiene que
sostenerse solo.

## Qué buscar

- **Contradicciones internas**: fechas, cifras, nombres, cronología o
  afirmaciones que chocan entre dos puntos del propio texto.
- **Pasajes que no se entienden**: referencias sin presentar (alguien o algo
  aparece sin contexto), saltos de tema sin transición, frases ambiguas, un
  pronombre que puede referirse a dos cosas.
- **Saltos de lógica**: una conclusión que no se sigue de lo anterior, una
  causa que aparece sin haberse establecido.
- **Cabos sueltos**: algo que el texto promete (una pregunta, una revelación)
  y no cierra, o un dato que se introduce y desaparece.

No señales cuestiones de estilo, ritmo, elección de palabras ni gustos de
redacción. Eso queda fuera de esta revisión. Tampoco comentes ortografía.

## Escala de gravedad

- **Grave**: contradicción o error de lógica que el lector no puede reconciliar,
  o algo que lo lleva a una conclusión equivocada.
- **Media**: pasaje que no se entiende o obliga a releer para seguir el hilo.
- **Leve**: rugosidad menor que no impide entender, pero que un lector atento
  notaría.

## Formato del informe

Responde en español, por pantalla, ordenado de más a menos grave. Cada
hallazgo lleva:

1. Gravedad (grave, media o leve).
2. Cita literal breve del pasaje, con su ubicación (párrafo número N).
3. Qué le pasa a un lector aquí, en una o dos frases: qué entiende, qué se
   pregunta, qué choca.

Termina con una línea de balance: cuántos hallazgos de cada nivel, y una frase
sobre si el texto se sostiene en general. Si no encuentras nada en un nivel,
dilo; no inventes hallazgos para llenar el informe. Si el texto está limpio,
dilo sin rodeos.

No propongas reescrituras salvo que el problema sea ambiguo y una pista corta
ayude a entenderlo. El autor decide cómo arreglarlo.

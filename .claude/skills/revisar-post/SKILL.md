---
name: revisar-post
description: Revisión completa de un artículo del blog en un solo comando. Encadena ortografía, lectura crítica (en un subagente, para que sea ciega a las notas) y cotejo con las notas. Úsala cuando el usuario pida revisar un post entero o diga "revisa <slug>".
argument-hint: <slug>
---

# Revisar post

Orquesta las tres revisiones del proyecto sobre `$ARGUMENTS` en el orden
correcto. Si no se indica slug, pregunta cuál. Comprueba que existe
`src/content/articles/<slug>.mdx` (o `.md`); si no, lista los artículos
disponibles.

El orden importa: la lectura crítica debe hacerse **sin conocer las notas**, y
por eso se ejecuta en un subagente que arranca en frío, no en esta
conversación. No leas `notas/` hasta que ese informe haya vuelto.

## Pasos

1. **Ortografía.** Invoca la skill `revisar-ortografia` con el slug. Edita el
   fichero directamente; no tienes que repetir su resumen entero después.

2. **Lectura crítica, en un subagente.** Lanza un agente `general-purpose` con
   un prompt autocontenido, que diga:
   - que lea `.claude/skills/revisar-lectura/SKILL.md` y siga sus instrucciones
     al pie de la letra, sustituyendo `$ARGUMENTS` por el slug;
   - que no abra `notas/` ni ningún otro fichero fuera del artículo;
   - que no edite nada;
   - que devuelva el informe completo, tal cual lo pide la skill.

   No le pases tu contexto, las correcciones de ortografía ni nada de las
   notas: la ceguera es el objetivo.

3. **Notas.** Si existe `notas/<slug>.md`, invoca la skill `revisar-notas` con
   el slug. Si no existe, salta este paso y dilo en el informe final.

## Informe final

Responde en español con las tres partes, en este orden:

1. **Ortografía**: el resumen de la skill (cuántas correcciones, qué quedó
   dudoso).
2. **Lectura crítica**: el informe del subagente, sin modificarlo.
3. **Notas**: el informe de la skill, sin modificarlo (o la nota de que no hay
   fichero de notas).

Cierra con una sección **Prioridades**: los hallazgos graves de la lectura y
las discrepancias de las notas, ordenados de más a menos urgentes, en pocas
líneas. Si un mismo problema aparece en las dos revisiones, júntalo y dilo.
Termina sugiriendo `/pendientes <slug>` solo si hay hallazgos que requieren
investigar, no si basta con reescribir.

No edites el artículo más allá de lo que hace `revisar-ortografia`, y no hagas
commit.

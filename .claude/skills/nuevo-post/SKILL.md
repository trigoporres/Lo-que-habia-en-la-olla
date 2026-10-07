---
name: nuevo-post
description: Crea un artículo nuevo del blog como borrador (draft true) junto con su fichero de notas en notas/. Úsala cuando el usuario quiera empezar un post o una investigación nueva.
argument-hint: <slug> ["Título del artículo"]
---

# Nuevo post

Crea dos ficheros vacíos para empezar un artículo: el borrador en
`src/content/articles/` y el cajón de notas en `notas/`. No escribas contenido
del artículo ni investigues el tema: solo prepara el terreno.

## Pasos

1. **Slug.** Debe estar en minúsculas, sin tildes, sin eñes ni espacios, con
   guiones (`el-cocinero-invisible`). Si el usuario da un título en lugar de un
   slug, deriva uno y úsalo sin preguntar; si hay ambigüedad real, pregunta. Si
   no se indica nada, pregunta de qué trata.
2. **No sobrescribas nada.** Si ya existe `src/content/articles/<slug>.mdx` (o
   `.md`) o `notas/<slug>.md`, para y dilo. No crees solo uno de los dos.
3. **Fecha.** Obtén la de hoy con `date +%F`.
4. **Borrador.** Crea `src/content/articles/<slug>.mdx` con exactamente este
   frontmatter y una línea en blanco después:

   ```
   ---
   title: "<Título>"
   description: ""
   pubDate: <fecha de hoy>
   author: "La redacción"
   tags: []
   draft: true
   ---
   ```

   El título es el que dio el usuario o, si no hay, el slug con mayúscula
   inicial y guiones convertidos en espacios. Deja `description` y `tags`
   vacíos: son del autor, y `/preparar-publicacion` avisará si siguen así al
   publicar.
5. **Notas.** Crea `notas/<slug>.md` con solo `# Notas: <Título>` y una línea
   en blanco. Sin secciones prefabricadas: es un cajón libre donde el autor
   volcará fuentes, ideas y dudas como le salgan.
6. **No añadas `series`.** Si el usuario ha dicho que el post es parte de una
   serie, añade al frontmatter el bloque `series` con `name`, `slug`, `part` y
   `totalParts` tal como define `src/content.config.ts`, usando los valores que
   dé. Si faltan datos, pregúntalos.
7. No hagas commit ni push.

## Salida

Responde en español con las dos rutas creadas y un recordatorio de una línea:
el post es borrador (`draft: true`), el sitio lo oculta mientras tanto, y al
terminarlo se quita `draft: true` y se pasa `/preparar-publicacion <slug>`
antes del push.

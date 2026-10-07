---
name: preparar-publicacion
description: Lista de comprobación final antes de publicar un artículo del blog (slug, frontmatter, estado de borrador, marcas pendientes, etiquetas, enlaces, serie y build). Solo informa; no edita ni hace push. Úsala cuando el usuario vaya a publicar un post o pida comprobarlo antes del push.
argument-hint: <slug> [--produccion]
---

# Preparar publicación

Comprueba que `src/content/articles/<slug>.mdx` (o `.md`) está listo para
publicarse. Publicar significa hacer push a `main` con el post sin
`draft: true`; Vercel despliega desde `main`.

**Solo informa.** No edites ficheros, no hagas commit ni push. El autor decide
qué corregir.

Si no se indica slug, pregunta cuál. Lee `src/content.config.ts` para conocer
el schema real en lugar de asumir campos.

## Comprobaciones

### 1. Fichero y slug

El fichero existe. El slug va en minúsculas, sin tildes, eñes ni espacios, con
guiones.

### 2. Frontmatter

- `title` y `description` presentes y no vacíos.
- `description`: avisa si tiene menos de 50 o más de 160 caracteres, porque se
  usa como meta descripción.
- `pubDate`: fecha válida. Compárala con hoy (`date +%F`) y avisa si es futura
  o distinta de hoy: es la fecha que verá el lector, y Astro no filtra por
  fecha, así que el post sale publicado al hacer push sea cual sea.
- `tags`: al menos una. Compáralas con las de los demás artículos no
  borrador, sin distinguir mayúsculas ni tildes: señala casi duplicados
  ("Siglo de Oro" frente a "siglo de oro") y, como dato informativo, las que
  son nuevas, porque cada etiqueta nueva crea una página en `/etiquetas/`.

### 3. Estado de borrador y marcas pendientes

- Si tiene `draft: true`, dilo de forma destacada: **el post no aparecerá en el
  sitio aunque se haga push**. Es lo esperado si el autor aún no publica, pero
  no si este era el último paso antes de publicar.
- Busca en el frontmatter y el cuerpo marcas de trabajo pendiente: `TODO`,
  `FIXME`, `XXX`, `PENDIENTE`, "falta confirmar", `[...]`, `???`, "lorem".

### 4. Enlaces e imágenes

- Los enlaces internos (`/articulos/...`, `/etiquetas/...`) apuntan a algo que
  existe y que no es borrador.
- Las imágenes referenciadas con ruta absoluta existen en `public/`.

### 5. Serie

Solo si el frontmatter tiene `series`:

- Los otros artículos con el mismo `series.slug` usan el mismo `series.name`.
- `part` no supera `totalParts` ni se repite entre hermanos, y `totalParts` es
  el mismo en todos.
- Las partes anteriores existen y no son borrador (si una parte anterior sigue
  como borrador, los lectores verían una serie con huecos).

### 6. Build

Ejecuta `npm run build` y resume el resultado. Si falla, cita el mensaje de
error relevante (suelen ser errores de schema o de MDX). Si no es borrador,
confirma que se generó `dist/articulos/<slug>/index.html`.

### 7. Producción (solo con `--produccion` o si el usuario dice que ya hizo push)

Con WebFetch, abre `https://www.loquehabiaenlaolla.com/articulos/<slug>` y
comprueba que carga, que muestra el título esperado y que el artículo aparece
en la portada. Vercel tarda un par de minutos en desplegar: si aún no está,
dilo y sugiere revisar el deploy; no reintentes en bucle.

## Informe

Responde en español con tres grupos, omitiendo los vacíos:

1. **Bloquea la publicación**: cosas que rompen el build o dejan el post sin
   salir (por ejemplo, `draft: true` si se quería publicar, o un error de
   schema).
2. **Avisos**: cosas que no rompen nada pero el autor querría ver (marcas
   pendientes, descripción fuera de rango, fecha distinta de hoy, etiqueta
   casi duplicada).
3. **Correcto**: una línea con lo que pasó sin problemas.

Cierra con un veredicto de una línea: "Listo para push" o "No listo:" seguido
del motivo principal.

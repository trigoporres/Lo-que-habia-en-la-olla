---
name: revisar-ortografia
description: Revisión ortográfica de un artículo del blog (tildes, puntuación, mayúsculas, erratas). Aplica las correcciones directamente en el fichero. Úsala cuando el usuario pida revisar la ortografía de un post o diga "revisa la ortografía de <slug>".
argument-hint: <slug del artículo>
---

# Revisar ortografía

Corrige errores ortográficos y ortotipográficos de `src/content/articles/$ARGUMENTS.mdx`
(o `.md`) y edita el fichero directamente. El usuario revisará los cambios con
`git diff`, así que no hace falta pedir confirmación ni listar cada cambio.

Si no se indica slug, pregunta cuál. Si el fichero no existe, lista los
artículos disponibles.

## Qué corregir

- Tildes y diacríticos (incluidas tildes diacríticas: té/te, sí/si, más/mas).
  `solo` y los demostrativos (`este`, `ese`, `aquel`) van sin tilde.
- Puntuación: comas, puntos, signos de apertura y cierre (`¿?`, `¡!`), espacios
  de más o de menos, puntos y comas mal usados.
- Mayúsculas y minúsculas según la RAE (siglos en números romanos, cargos y
  meses en minúscula salvo inicio de oración, nombres propios en mayúscula).
- Erratas evidentes: letras duplicadas o faltantes, palabras pegadas.
- Concordancia obvia de género y número.

## Qué NO tocar

- Estilo, tono, orden de palabras, vocabulario o longitud de las frases. Si algo
  suena mejorable pero es correcto, se deja como está: la voz es del autor.
- Citas históricas entre comillas o en bloque: pueden conservar la grafía
  original de la época (por ejemplo, textos del siglo XVII). Solo se corrige una
  errata si es claramente de transcripción moderna, y en ese caso se menciona en
  el resumen final en lugar de cambiarla en silencio.
- El frontmatter, salvo erratas evidentes en `title` y `description`. No cambies
  fechas, tags ni claves.
- La sintaxis MDX: imports, componentes, JSX, enlaces y listas. Edita solo el
  texto, nunca la estructura.
- Datos (fechas, nombres, cifras): aunque parezcan erróneos, no los cambies.
  Menciónalos en el resumen para que el autor los compruebe.

## Cómo editar

Usa ediciones puntuales (Edit) y no reescribas el fichero entero, para que el
diff sea mínimo y legible. Respeta el ajuste de línea a 80 columnas
(`proseWrap: always` de Prettier) cuando una corrección alargue una línea.

## Resumen final

Responde en español con un resumen de pocas líneas: cuántas correcciones
hiciste y de qué tipo, y por separado cualquier cosa dudosa que dejaste sin
tocar (citas con grafía antigua, posibles errores de datos). Sin listar cada
cambio.

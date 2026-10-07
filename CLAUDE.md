# Lo que había en la olla

Blog divulgativo de historia de la cocina, contada desde quienes cocinaban (no
desde quienes comían). Tono serio, de revista de historia; no es un blog de
recetas. Cada decisión técnica y visual debe servir a la legibilidad de
artículos largos y a la sobriedad.

## Stack

Astro 6 (salida estática), React 19, Tailwind 4 (plugin de Vite), MDX. Node
>=22.12. Analytics con `@vercel/analytics`.

## Despliegue

Producción: https://www.loquehabiaenlaolla.com/ (Vercel, desplegado desde
`main`). Repositorio: `git@github.com:trigoporres/Lo-que-habia-en-la-olla.git`.

## Comandos

```bash
npm run dev      # servidor local en localhost:4321
npm run build    # build de producción a ./dist/
npm run preview  # previsualizar el build
```

No hay tests ni linter configurados. Prettier usa `printWidth: 80` y
`proseWrap: always` (los artículos MDX se envuelven a 80 columnas).

## Estructura

```
src/
├── components/        Header, Footer, ArticleCard, SeriesBadge, TagPill, BaseHead
├── layouts/           BaseLayout, ArticleLayout
├── content/articles/  Artículos en MDX (el slug es el nombre del fichero)
├── content.config.ts  Schema de la colección (en la raíz de src/, no en content/)
├── pages/             index, sobre, articulos/[slug], etiquetas/[tag]
└── styles/global.css  Tokens de Tailwind (@theme) y estilos de .prose
```

## Artículos

Frontmatter (validado con Zod en `src/content.config.ts`): `title`,
`description`, `pubDate`, `updatedDate?`, `author` (por defecto "La
redacción"), `tags[]`, `series?`, `draft` (por defecto `false`).

Las series se agrupan por `series.slug` e incluyen `name`, `part` y
`totalParts`. La navegación de series se calcula en `ArticleLayout` consultando
toda la colección.

## Revisión de artículos

Tres skills del proyecto (en `.claude/skills/`), pensadas para ejecutarse en
este orden sobre un post terminado:

1. `/revisar-ortografia <slug>`: corrige tildes, puntuación y erratas
   directamente en el fichero (el autor revisa con `git diff`).
2. `/revisar-lectura <slug>`: informe por pantalla de contradicciones y pasajes
   confusos, con gravedad. No lee las notas a propósito.
3. `/revisar-notas <slug>`: informe de discrepancias entre el post y
   `notas/<slug>.md`.

Las dos últimas nunca editan el artículo. No se aplican guías de estilo ni se
reescribe la voz del autor.

## Convenciones y gotchas de Astro 6

- La config de contenido vive en `src/content.config.ts` (Content Layer API con
  `glob` loader), NO en `src/content/config.ts`.
- Los IDs de entradas no llevan extensión. Para renderizar usa
  `render(article)` importado de `astro:content`, no `article.render()`.
- El primer párrafo de `.prose` tiene drop cap con `::first-letter` en color
  `ember`.

## Diseño

Usa siempre los tokens de `global.css` en vez de colores sueltos: `cream`
(fondo), `ink` (texto), `ember` (acento terracota), `border`, `parchment`,
`tag`. Tipografías: Playfair Display (`font-display`, titulares), Lora
(`font-serif`, cuerpo) e Inter (`font-sans`, UI). Mobile-first.

## Idioma

Contenido del blog y documentación en español; código y comentarios en inglés.

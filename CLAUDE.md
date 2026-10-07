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

## Flujo de un post

1. **Investigación**: el autor vuelca fuentes, libros, ideas y dudas, sin
   estructura fija, en `notas/<slug>.md`. Las notas son públicas a propósito
   (el repo es público y forma parte del proceso).
2. **Borrador**: el post se escribe en `src/content/articles/<slug>.mdx` con
   `draft: true`. El sitio oculta los borradores (portada, página del artículo,
   etiquetas y series filtran por `!data.draft`), así que se puede hacer push
   con el borrador sin que salga.
3. **Publicación**: se quita `draft: true` y se hace push a `main`; Vercel
   despliega. No existe rama de preview ni paso intermedio.
4. **Fuentes**: los artículos no llevan sección de fuentes ni bibliografía salvo
   que el autor lo pida expresamente.
5. **Series**: no se sabe de antemano si un post será serie; el schema las
   soporta (`series`) y se añaden cuando se decide.

### Skills del proyecto (`.claude/skills/`)

Todas reciben el slug del artículo. Ninguna hace commit ni push.

- `/nuevo-post <slug>`: crea el borrador (`draft: true`) y `notas/<slug>.md`.
- `/revisar-post <slug>`: encadena las tres revisiones siguientes. La lectura
  crítica va en un subagente para que sea ciega a las notas.
  - `/revisar-ortografia`: corrige tildes, puntuación y erratas directamente
    (el autor revisa con `git diff`).
  - `/revisar-lectura`: informe de contradicciones y pasajes confusos, con
    gravedad. No lee las notas a propósito.
  - `/revisar-notas`: informe de discrepancias entre el post y las notas.
- `/pendientes <slug>`: anota en las notas lo que hay que investigar según los
  informes de revisión.
- `/preparar-publicacion <slug>`: comprobación final antes del push (informa,
  no edita).
- `/hilo-social <slug>`: borrador de hilo para redes (no publica).

Las revisiones salvo la ortográfica nunca editan el artículo. No se aplican
guías de estilo ni se reescribe la voz del autor.

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

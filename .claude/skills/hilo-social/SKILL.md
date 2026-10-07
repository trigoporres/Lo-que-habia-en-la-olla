---
name: hilo-social
description: Redacta un borrador de hilo y de publicación única para redes a partir de un artículo del blog, con el tono serio del blog. Solo propone texto; no publica nada. Úsala cuando el usuario quiera difundir un post.
argument-hint: <slug>
---

# Hilo para redes

Lee `src/content/articles/<slug>.mdx` (o `.md`) y propón texto para difundirlo.
**Solo escribes borradores en esta conversación**: no publiques, no guardes
ficheros y no hagas commit.

Si no se indica slug, pregunta cuál. Si el artículo tiene `draft: true`, avisa
de que aún no está publicado y que el enlace no funcionará hasta entonces.

## Reglas de contenido

- **Solo lo que dice el artículo.** No añadas datos, fechas ni contexto
  históricos que no estén en él. Respeta sus dudas: si el artículo dice que
  algo no se puede confirmar, el hilo tampoco lo afirma.
- **Misma voz que el blog.** Tono serio, de revista de historia: sobrio,
  concreto, sin clickbait ni fórmulas de enganche ("no te vas a creer...",
  "hilo").
- **Sin emojis y sin hashtags**, salvo que el usuario los pida.
- Abre con el detalle más concreto o más fuerte del artículo, no con una
  presentación genérica. No reveles el final del artículo: el hilo tiene que
  dar ganas de leerlo.

## Formato

Entrega dos cosas, en español:

1. **Hilo**: de 4 a 6 mensajes numerados. Cada mensaje cabe en 280 caracteres;
   indica el recuento de cada uno. El último mensaje enlaza al artículo:
   `https://www.loquehabiaenlaolla.com/articulos/<slug>`.
2. **Publicación única**: un solo mensaje de hasta 280 caracteres, enlace
   incluido, para quien prefiera no hacer hilo.

Cierra con una línea que diga qué pasaje o detalle elegiste como gancho y por
qué, por si el autor quiere cambiarlo. No generes variantes extra salvo que se
pidan.

Antes de entregar, comprueba que ningún mensaje supera 280 caracteres y que
ninguna afirmación del hilo contradice o refuerza un dato que el artículo deja
como dudoso.

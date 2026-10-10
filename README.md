# Sabores de Venezuela

Proyecto realizado para la **EFA de Desarrollo Web**.

Aplicación con formulario hecha con **React JS** (Create React App): una galería de recetas venezolanas, una página de detalle para cada receta y un formulario para compartir recetas nuevas.

## Tecnologías
- HTML, CSS y JavaScript
- React JS, creado con Create React App (`react-scripts`)
- React Router
- Node.js y Express (servidor que entrega y guarda las recetas)

## Estructura
- `public/index.html` — HTML base de la aplicación
- `src/` — aplicación React
  - `index.js` — punto de entrada
  - `App.js` — rutas y estructura general
  - `Header.js` — cabecera y navegación
  - `Recetas.js` — galería de recetas
  - `Receta.js` — detalle de una receta
  - `CompartirReceta.js` — formulario para compartir una receta
  - `App.css` e `index.css` — estilos
- `server.js` — servidor Express: `GET /api/recetas` y `POST /api/compartir`
- `recetas.json` — datos de las recetas
- `original/` — primera versión del proyecto, hecha solo con HTML, CSS y JavaScript

Las recetas enviadas por el formulario se guardan en `compartidas.json`.

## Cómo ejecutarlo
Requiere Node.js instalado.

1. Descargar el proyecto e instalar dependencias: `npm install`
2. Iniciar la aplicación: `npm start`
3. Abrir http://localhost:3000

`npm start` arranca a la vez la aplicación React (puerto 3000) y el servidor Express (puerto 5000).

Para generar la versión de producción: `npm run build` (queda en la carpeta `build/`).
# sabores-venezuela

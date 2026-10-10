# Sabores de Venezuela

Integrante: Yuriangel Perez 

Proyecto realizado para la **EFA de Desarrollo Web** de la UNPilar.

Es una galería de recetas venezolanas con una página de detalle para cada receta y un formulario para compartir recetas nuevas.

## Tecnologías
- HTML, CSS y JavaScript
- React (con React Router)
- Node.js y Express
- Vite

## Estructura
- `server.js` — servidor Express: `GET /api/recetas` y `POST /api/compartir`
- `recetas.json` — datos de las recetas
- `src/` — aplicación React
  - `App.js` — rutas y estructura general
  - `Header.js` — cabecera y navegación
  - `Recetas.js` — galería de recetas
  - `Receta.js` — detalle de una receta
  - `CompartirReceta.js` — formulario para compartir una receta
  - `App.css` e `index.css` — estilos

Las recetas que se envían por el formulario se guardan en `compartidas.json`.

## Cómo ejecutarlo
1. Instalar dependencias: `npm install`
2. Modo desarrollo: `npm run dev` y abrir http://localhost:5173 (arranca la web y el servidor a la vez)
3. Modo producción: `npm run build` y luego `npm start`, abrir http://localhost:3000

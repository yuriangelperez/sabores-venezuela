const express = require('express');
const fs = require('fs');

const app = express();

// Se lee en cada petición para que los cambios en recetas.json se vean sin reiniciar
const leerRecetas = () => JSON.parse(fs.readFileSync('recetas.json', 'utf8'));

app.use(express.json());

// Recetas de la galería
app.get('/api/recetas', (_req, res) => res.json(leerRecetas()));

// Recetas que comparte la gente (se guardan en compartidas.json)
app.post('/api/compartir', (req, res) => {
  const { nombre, email, tituloReceta, ingredientes, preparacion } = req.body;

  if (!nombre?.trim() || !email?.includes('@') || !tituloReceta?.trim()) {
    return res.status(400).json({ error: 'Completa nombre, email y nombre de la receta' });
  }

  const compartidas = fs.existsSync('compartidas.json')
    ? JSON.parse(fs.readFileSync('compartidas.json', 'utf8'))
    : [];
  compartidas.push({ nombre, email, tituloReceta, ingredientes, preparacion, fecha: new Date() });
  fs.writeFileSync('compartidas.json', JSON.stringify(compartidas, null, 2));

  res.status(201).json({ ok: true });
});

// Sirve el build de React (npm run build); cualquier otra ruta devuelve index.html
app.use(express.static('build'));
app.get('*', (_req, res) => res.sendFile('index.html', { root: 'build' }));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Servidor en http://localhost:${PORT}`));

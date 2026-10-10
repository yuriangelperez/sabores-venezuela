import express from 'express';
import fs from 'fs';

const app = express();
// Se lee en cada petición para que los cambios en recetas.json se vean sin reiniciar
const leerRecetas = () => JSON.parse(fs.readFileSync('recetas.json', 'utf8'));

app.use(express.json());

// Recetas del carrusel
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

// Sirve el build de React; cualquier otra ruta (ej. /compartir) devuelve index.html
app.use(express.static('dist'));
app.get('*', (_req, res) => res.sendFile('index.html', { root: 'dist' }));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor en http://localhost:${PORT}`));

import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function Recetas() {
  const [recetas, setRecetas] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch('/api/recetas')
      .then((res) => res.json())
      .then(setRecetas)
      .catch(() => setError(true));
  }, []);

  return (
    <main>
      <h1 className="titulo-pagina">Mi Galería de Recetas Venezolanas</h1>
      <p className="subtitulo">Platos que saben al tricolor.</p>

      {error && <p className="subtitulo">No se pudieron cargar las recetas.</p>}

      <section className="galeria">
        {recetas.map((receta) => (
          <div className="tarjeta" key={receta.id}>
            <img src={receta.imagen} alt={receta.nombre} />
            <h3>{receta.nombre}</h3>
            <p>{receta.descripcion}</p>
            <Link to={`/receta/${receta.id}`}>Ver más</Link>
          </div>
        ))}
      </section>
    </main>
  );
}

export default Recetas;

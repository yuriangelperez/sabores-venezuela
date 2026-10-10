import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

function Receta() {
  const { id } = useParams();
  const [receta, setReceta] = useState(null);
  const [noExiste, setNoExiste] = useState(false);

  useEffect(() => {
    fetch('/api/recetas')
      .then((res) => res.json())
      .then((lista) => {
        const encontrada = lista.find((r) => r.id === Number(id));
        if (encontrada) setReceta(encontrada);
        else setNoExiste(true);
      })
      .catch(() => setNoExiste(true));
  }, [id]);

  if (noExiste) {
    return (
      <main>
        <p className="subtitulo">No encontramos esa receta.</p>
        <p className="volver"><Link to="/">Volver a la galería</Link></p>
      </main>
    );
  }

  if (!receta) return <main><p className="subtitulo">Cargando receta…</p></main>;

  return (
    <main>
      <article className="ficha">
        <h2>{receta.nombre}</h2>
        <img src={receta.imagen} alt={receta.nombre} />

        <h3>Ingredientes</h3>
        <ul>
          {receta.ingredientes.map((ingrediente) => (
            <li key={ingrediente}>{ingrediente}</li>
          ))}
        </ul>

        <h3>Preparación</h3>
        <ol>
          {receta.instrucciones.map((paso) => (
            <li key={paso}>{paso}</li>
          ))}
        </ol>
      </article>

      <p className="volver">
        <Link to="/">Volver a la galería</Link>
      </p>
    </main>
  );
}

export default Receta;

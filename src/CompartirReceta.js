import { useState } from 'react';

function CompartirReceta() {
  const [recetaCompleta, setRecetaCompleta] = useState(false);
  const [estado, setEstado] = useState(''); // '' | 'enviado' | 'error'

  async function manejarEnvio(evento) {
    evento.preventDefault();
    const formulario = evento.currentTarget;
    const datos = Object.fromEntries(new FormData(formulario));

    const res = await fetch('/api/compartir', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(datos),
    });

    if (res.ok) {
      setEstado('enviado');
      formulario.reset();
      setRecetaCompleta(false);
    } else {
      setEstado('error');
    }
  }

  return (
    <main>
      <article className="ficha formulario-seccion">
      <h2>Comparte tu receta</h2>
      <p className="subtitulo">¿Tienes una receta venezolana que te encanta? ¡Queremos conocerla!</p>

      {estado === 'enviado' && (
        <p className="mensaje-exito" role="status">
          ¡Gracias por compartir tu receta! La recibimos correctamente.
        </p>
      )}
      {estado === 'error' && (
        <p className="mensaje-error" role="alert">
          No se pudo enviar. Revisa los datos e inténtalo de nuevo.
        </p>
      )}

      <form className="formulario-recetas" onSubmit={manejarEnvio}>
        <label htmlFor="nombre">Tu nombre</label>
        <input id="nombre" name="nombre" type="text" placeholder="Escribe tu nombre" required />

        <label htmlFor="email">Tu email</label>
        <input id="email" name="email" type="email" placeholder="ejemplo@correo.com" required />

        <label htmlFor="tituloReceta">Nombre de la receta</label>
        <input
          id="tituloReceta"
          name="tituloReceta"
          type="text"
          placeholder="Ej.: Quesillo"
          required
        />

        <label className="casilla-receta">
          <input
            type="checkbox"
            checked={recetaCompleta}
            onChange={(evento) => setRecetaCompleta(evento.target.checked)}
          />
          Quiero compartir la receta completa
        </label>

        {recetaCompleta && (
          <>
            <label htmlFor="ingredientes">Ingredientes</label>
            <textarea
              id="ingredientes"
              name="ingredientes"
              rows="5"
              placeholder="Escribe los ingredientes y sus cantidades..."
              required
            />

            <label htmlFor="preparacion">Preparación</label>
            <textarea
              id="preparacion"
              name="preparacion"
              rows="6"
              placeholder="Cuéntanos cómo prepararla..."
              required
            />
          </>
        )}

        <button type="submit">Enviar receta</button>
      </form>
      </article>
    </main>
  );
}

export default CompartirReceta;

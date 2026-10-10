const recipes = [
  {
    id: 1,
    nombre: 'Arepa de carne mechada',
    categoria: 'Plato principal',
    descripcion: 'La arepa más sabrosa de la mesa venezolana, rellena con carne desmechada y queso.',
    imagen: 'https://laroussecocina.mx/wp-content/uploads/2020/07/Arepas-de-carne-mechada.jpg',
    ingredientes: [
      '2 tazas de harina de maíz precocida',
      '2 1/4 tazas de agua tibia',
      '1 cucharadita de sal',
      '500 g de falda de res',
      '1 cebolla picada',
      '1 pimiento rojo',
      '2 dientes de ajo',
      '1 tomate maduro',
      '1 cucharadita de comino',
      'Aceite, sal y pimienta al gusto'
    ],
    preparacion: [
      'Mezcla la harina, el agua tibia y la sal hasta formar una masa suave.',
      'Forma discos y cocínalos en la sartén a fuego medio durante 7 a 10 minutos por lado.',
      'Cocina la carne con sal, desméchala y resérvala.',
      'Sofríe la cebolla, el pimiento, el ajo y el tomate; añade la carne y el comino.',
      'Rellena las arepas y sirve calientes con queso o mantequilla.'
    ]
  },
  {
    id: 2,
    nombre: 'Pabellón criollo',
    categoria: 'Clásico',
    descripcion: 'El plato más representativo de Venezuela: arroz, carne mechada y caraotas negras.',
    imagen: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=900&q=80',
    ingredientes: [
      '500 g de carne de res',
      '2 tazas de arroz',
      '1 taza de caraotas negras cocidas',
      '2 plátanos maduros',
      '1 cebolla picada',
      '2 dientes de ajo',
      '1 tomate',
      '1 cucharadita de comino',
      '1 cucharadita de pimentón',
      'Aceite, sal y pimienta al gusto'
    ],
    preparacion: [
      'Cocina la carne con sal hasta que esté tierna y desméchala.',
      'Sofríe la cebolla, el ajo y el tomate, luego agrega la carne y los condimentos.',
      'Prepara el arroz y cocina las caraotas con un sofrito suave.',
      'Fríe los plátanos en rodajas o tajadas.',
      'Sirve la carne mechada junto al arroz, las caraotas y el plátano.'
    ]
  },
  {
    id: 3,
    nombre: 'Hallaca',
    categoria: 'Especial',
    descripcion: 'La hallaca es un símbolo navideño con sabor tradicional y relleno muy sabroso.',
    imagen: 'https://images.unsplash.com/photo-1559847844-5315695dadae?auto=format&fit=crop&w=900&q=80',
    ingredientes: [
      'Harina de maíz precocida',
      '500 g de pollo o carne de cerdo',
      '1 cebolla grande',
      '1 pimentón rojo',
      '1 ají dulce',
      '2 dientes de ajo',
      '1 taza de caldo',
      'Aceitunas y alcaparras',
      'Sal, pimienta, comino y achiote',
      'Hojas de plátano'
    ],
    preparacion: [
      'Prepara el relleno con la carne, cebolla, ají, ajo y caldo.',
      'Mezcla la harina con agua y achiote para obtener la masa.',
      'Extiende la masa sobre la hoja de plátano y coloca el relleno.',
      'Cierra la hallaca con la hoja y haz el nudo final.',
      'Hierve las hallacas durante 45 minutos y sirve calientes.'
    ]
  },
  {
    id: 4,
    nombre: 'Tres leches',
    categoria: 'Postre',
    descripcion: 'Un postre suave y esponjoso que combina leche condensada, evaporada y crema.',
    imagen: 'https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&w=900&q=80',
    ingredientes: [
      '1 taza de harina de trigo',
      '1 taza de azúcar',
      '3 huevos',
      '1 cucharadita de polvo de hornear',
      '1 taza de leche condensada',
      '1 taza de leche evaporada',
      '1 taza de crema de leche',
      '1 cucharadita de vainilla',
      'Coco o canela para decorar'
    ],
    preparacion: [
      'Bate los huevos con el azúcar hasta formar una mezcla cremosa.',
      'Añade la harina, el polvo de hornear y la vainilla.',
      'Hornea hasta dorar y deja enfriar el bizcochuelo.',
      'Mezcla la leche condensada, la evaporada y la crema de leche.',
      'Vierte la mezcla sobre el bizcochuelo y deja reposar en el refrigerador.'
    ]
  }
];

const app = document.getElementById('app');

function renderLandingPage() {
  app.innerHTML = `
    <div class="topbar">
      <nav class="nav">
        <div class="brand">Sabores de Venezuela</div>
        <div class="nav-links">
          <a href="#">Inicio</a>
          <a href="#recetas">Recetas</a>
          <a href="#contacto">Contacto</a>
        </div>
      </nav>
    </div>

    <main class="landing-page">
      <section class="hero">
        <div class="hero-copy">
          <p class="eyebrow">Tradición • Sabor • Venezuela</p>
          <h1>Descubre recetas que saben a patria.</h1>
          <p>
            Una galería de platos venezolanos que celebra la cocina más sabrosa,
            colorida y emocionante del país.
          </p>
          <div class="cta-row">
            <a href="#recetas" class="primary-btn">Ver recetas</a>
            <a href="#contacto" class="secondary-btn">Reservar</a>
          </div>
        </div>

        <aside class="hero-card">
          <span class="badge">Receta del día</span>
          <h3>Arepa reina pepiada</h3>
          <p>La favorita de la mesa venezolana.</p>
          <ul>
            <li>Pollo desmenuzado</li>
            <li>Aguacate cremoso</li>
            <li>Queso y mayonesa</li>
          </ul>
        </aside>
      </section>

      <section id="recetas" class="section-title">
        <p class="eyebrow">Galería culinaria</p>
        <h2>Recetas que despiertan recuerdos</h2>
      </section>

      <section class="recipe-grid">
        ${recipes
          .map(
            (recipe) => `
              <article class="recipe-card">
                <img src="${recipe.imagen}" alt="${recipe.nombre}" />
                <div class="recipe-body">
                  <span class="tag">${recipe.categoria}</span>
                  <h3>${recipe.nombre}</h3>
                  <p>${recipe.descripcion}</p>
                  <button class="ver-btn" data-id="${recipe.id}">Ver receta</button>
                </div>
              </article>
            `
          )
          .join('')}
      </section>
    </main>
  `;

  document.querySelectorAll('.ver-btn').forEach((button) => {
    button.addEventListener('click', () => {
      const id = Number(button.dataset.id);
      renderDetailPage(id);
    });
  });
}

function renderDetailPage(id) {
  const recipe = recipes.find((item) => item.id === id);

  if (!recipe) {
    renderLandingPage();
    return;
  }

  app.innerHTML = `
    <div class="detail-page">
      <button class="back-btn">← Volver</button>

      <article class="detail-card">
        <div class="detail-hero" style="background-image: url('${recipe.imagen}')">
          <div class="detail-header">
            <span class="tag">${recipe.categoria}</span>
          </div>
        </div>

        <div class="detail-body">
          <h1>${recipe.nombre}</h1>

          <div class="detail-layout">
            <div>
              <h3>Ingredientes</h3>
              <ul>
                ${recipe.ingredientes.map((item) => `<li>${item}</li>`).join('')}
              </ul>
            </div>

            <div>
              <h3>Preparación</h3>
              <ol>
                ${recipe.preparacion.map((step) => `<li>${step}</li>`).join('')}
              </ol>
            </div>
          </div>
        </div>
      </article>
    </div>
  `;

  document.querySelector('.back-btn').addEventListener('click', renderLandingPage);
}

renderLandingPage();

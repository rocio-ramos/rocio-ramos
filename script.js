const slides = [
  'Portada', 'Hola, soy Rocío', 'Contenido', 'Fashion Sale', 'Fashion Sale', 'Wireframe', 'Diseño responsive', 'Landing pages',
  'Cyber Week', 'Campañas digitales', 'Piezas de campaña', 'Plan de medios', 'New Beauty', 'Beauty Box', 'Beauty Box', 'Identidad visual',
  'Día del Labial', 'Día del Labial', 'Día del Labial', 'Social Media Design', 'Social Media Design', 'Contenido Social Media', 'Food & Lifestyle',
  'Email Marketing', 'Email Marketing', 'Template Design', 'Dirección creativa', 'Contacto'
];

const list = document.querySelector('#portfolio-list');
slides.forEach((title, index) => {
  const number = String(index + 1).padStart(2, '0');
  const figure = document.createElement('figure');
  figure.className = 'portfolio-slide';
  figure.innerHTML = `<div class="slide-image-wrap"><img loading="lazy" src="slides/${number}.jpg" alt="${title}, portfolio de Rocío Ramos"></div><figcaption><span>${number} · ${title}</span><span>Rocío Ramos</span></figcaption>`;
  list.append(figure);
});

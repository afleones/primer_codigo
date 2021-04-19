const fila = document.querySelector('.contenedor-carousel');
const peliculas = document.querySelectorAll('.pelicula');

const flechaIzquierda = document.getElementById('flecha-izquierda');
const flechaDerecha = document.getElementById('flecha-derecha');

// ? ---- ----- ----- Event listener para la flecha derecha ----- ----- ----
flechaDerecha.addEventListener('click', () => {
    fila.scrollLeft += fila.offsetWidth;

    const indicadorActivo = document.querySelector('.indicadores .activo');
    if(indicadorActivo.nextSibling){
      indicadorActivo.nextSibling.classList.add('activo');
      indicadorActivo.classList.remove('activo');
    };
});

// ? ---- ----- ----- Event listener para la flecha izquierda ----- ----- ----
flechaIzquierda.addEventListener('click', () => {
    fila.scrollLeft -= fila.offsetWidth;

    const indicadorActivo = document.querySelector('.indicadores .activo');
    if(indicadorActivo.previousSibling){
      indicadorActivo.previousSibling.classList.add('activo');
      indicadorActivo.classList.remove('activo');
    };
});

// ? ---- ----- ----- Paginacion ----- ----- ----
const numeroPaginas = Math.ceil(peliculas.length / 5);
for(let i = 0; i < numeroPaginas; i++){
  const indicador = document.createElement('button');

  if(i === 0){
    indicador.classList.add('activo');
  };

  document.querySelector('.indicadores').appendChild(indicador);
  indicador.addEventListener('click', (e) => {
    fila.scrollLeft = i * fila.offsetWidth;

    document.querySelector('.indicadores .activo').classList.remove('activo');
    e.target.classList.add('activo');
  });
};

// ? ---- ----- ----- Hover ----- ----- ----
peliculas.forEach((pelicula) => {
  pelicula.addEventListener('mouseenter', (e) => {
    const elemento = e.currentTarget;
    setTimeout(() => {
      peliculas.forEach(pelicula => pelicula.classList.remove('hover'));
      elemento.classList.add('hover');
    }, 300);
  });
});

fila.addEventListener('mouseleave', () => {
  peliculas.forEach(pelicula => pelicula.classList.remove('hover'));
});

const tabItems = document.querySelectorAll('.tab-item');
const tabContentItems = document.querySelectorAll('.tab-content-item');

// Select tab content item
function selectItem(e) {
	// Remove all show and border classes
	removeBorder();
	removeShow();
	// Add border to current tab item
	this.classList.add('tab-border');
	// Grab content item from DOM
	const tabContentItem = document.querySelector(`#${this.id}-content`);
	// Add show class
	tabContentItem.classList.add('show');
}

// Remove bottom borders from all tab items
function removeBorder() {
	tabItems.forEach(item => {
		item.classList.remove('tab-border');
	});
}

// Remove show class from all content items
function removeShow() {
	tabContentItems.forEach(item => {
		item.classList.remove('show');
	});
}

// Listen for tab item click
tabItems.forEach(item => {
	item.addEventListener('click', selectItem);
});

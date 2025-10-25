//Carga el contenido del main.

//contenedor para crear tarjetas en el DOM
const cardsContainer = document.querySelector('.int-menu__cards'); //esta constante llama al div de la misma clase

//creamos la tarjeta para los productos
function renderProducts (arrayProductos){
    cardsContainer.innerHTML = ''; //limpiar antes de renderzar
    arrayProductos.forEach(producto => {
        const card = document.createElement('div'); //crea el div de la tarjeta
        card.className= `card todo ${producto.categoria}`; //agrega las clases a las tarjeras
       // le ponemos el contenido a las cards con el innnerHTML
        card.innerHTML = ` 
        <h4>${producto.nombre}</h4>
        <img src="${producto.imagen}" alt="${producto.nombre}">
        <p>$${producto.precio}</p>
        <button class="buy-btn" data-id="${producto.id}">Comprar</button>
        `
        cardsContainer.appendChild(card);// agrega la tarjeta al final del contenedor
    });
}

// Accedemos al array global
async function init() {
    const productosCargados = await window.obtenerProductos(); //espera a que carguen las respuestas de obtenerProductos
    renderProducts(productosCargados);
}

init();
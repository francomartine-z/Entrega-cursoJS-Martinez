const cartBtn = document.querySelector('.nav__cart');   //Llamamos al boton del carrito
const modal = document.getElementById('cart-modal');    //llamamos al div de modal
const closeModal = document.querySelector('.modal .close');   //llama al boton close del modal

//activa el modal
cartBtn.addEventListener('click', () => {
    modal.style.display = 'flex';
});

//cierra el modal
closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
});
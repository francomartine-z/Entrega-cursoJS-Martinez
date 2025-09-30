const cartCount = document.getElementById('cart-count');//Llama al id = cart-count (el contador del carrito).
let count = 0; //valor del contador

function updateCartCount(){ //se encarga de verificar si hay algo agregado al carrito. De ser asi este lo mostrara
    if(count > 0){
        cartCount.textContent = count;
        cartCount.style.display = 'inline-block';
    } else{
        cartCount.style.display = 'none';
    }
}

function addToCart(){ //aumenta el contador del carrito.
   count++;
    updateCartCount()
}

function removeToCart(){ //resta valor del carrito en caso de que alguien quiera remover el producto.
    if(count > 0){
        count--;
        updateCartCount();
    }
}

const buyButton = document.querySelectorAll('.card button');

buyButton.forEach(button  => {
    button.addEventListener('click', ()=> {
        addToCart();
    })
})


//Actualiza el contador del carrito

const cartCount = document.getElementById('cart-count'); //Llama al id = cart-count (el contador del carrito).
let count = parseInt(localStorage.getItem('cartCount'))|| 0 ; //valor del contador, puede ser 0 o el valor cargado por el localStorage 

function updateCartCount(){ //se encarga de verificar si hay algo agregado al carrito. De ser asi este lo mostrara
    if(count > 0){
        cartCount.textContent = count;
        cartCount.style.display = 'inline-block';
    } else{
        cartCount.style.display = 'none';
    }

    localStorage.setItem('cartCount', count); //guarda en el localStorage el valor del carrito
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

function resetCartCount(){
    count = 0;
    updateCartCount()
}

updateCartCount(); //carga el valor del carrito al cargar la pagina 

window.cartManager = {addToCart, removeToCart, resetCartCount } //esto permite hacer las funciones accesibles en otros scripts



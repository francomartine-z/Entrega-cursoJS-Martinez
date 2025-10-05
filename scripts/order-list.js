let cart = JSON.parse(localStorage.getItem('cart'))|| []; //Aqui van guardados los productos. Tambien carga los datos deun carrito guardado en el localStorage

const buyButtons = document.querySelectorAll('.buy-btn');  //Llama a todos los botones de compra.

const cartList = document.querySelector('.cart-list');  //Llama a la lista dentro del modal. 

function saveCart() {
  localStorage.setItem('cart', JSON.stringify(cart)); //convierte los datos del carrito a un formato JSON y despues los guarda en el localStorage
}

function updateCart(){
    cartList.innerHTML = "" //limpia la lista
    let total = 0

    cart.forEach((item, index) =>{
        const li = document.createElement('li');  //crea un elemento "li".
        li.textContent = `${item.name} (x ${item.quantity}) - $${item.price}`;  //cambia el texto de los "li" creados.
        li.style.textDecoration = 'none';

        const removeBtn = document.createElement('button'); //creamos un boton que remueva el producto en caso de quererlo
        removeBtn.textContent = "❌";
        removeBtn.style.marginLeft = '10px';
        removeBtn.addEventListener('click',()=>{
            if (item.quantity > 1) {  //si la cantidad del producto es mayor a 1 entonces le resta 1 unidad.
                 item.quantity--;
            } else {
                cart.splice(index, 1); //si la cantidad del producto es 1 lo elimina.
            }

            window.cartManager.removeToCart(); //carga la funcion del sprit cart.js
            saveCart(); //activa la funcion saveCart
            updateCart();
        })

        li.appendChild(removeBtn);
        cartList.appendChild(li); //agrega el "li" al final de la lista del modal.
        total += item.price * item.quantity; //suma el valor del total con el valor del precio.
    })

    const totalLi = document.createElement('li');  //crea otro elemento li
    totalLi.textContent = `Total $${total}`;  //Sobreescribe el valor de la constante
    totalLi.style.fontWeight = 'bold';  //cambia el estilo a las letras
    cartList.appendChild(totalLi); //agrega la constante al final del modal
    saveCart();
}

updateCart(); //carga los datos al iniciar la pagina
//agregar eventos a los botones

buyButtons.forEach(button =>{
    button.addEventListener('click',()=>{
        const card = button.parentElement; //accedo al elemento padre mas cercano al elemeto
        const productName = card.querySelector('h4').textContent; //la constante toma el valor del h4 
        const productPrice = parseInt(card.querySelector('p').textContent.replace('$','')) //replace quita el $ del texto y lo cambia por un espado vacia y con el parseInt le da valor numerico
        
        const existingProduct = cart.find(item => item.name === productName);

        if (existingProduct) {
            existingProduct.quantity++; // aumenta cantidad
        } else {
            cart.push({ name: productName, price: productPrice, quantity: 1 });
        }
        
        window.cartManager.addToCart();
       saveCart();
        // actualizar la lista del modal
        updateCart();
    })
})
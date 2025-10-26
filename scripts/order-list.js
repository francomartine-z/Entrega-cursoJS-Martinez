//crea la lista de compra

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
        li.className= "modal-list"; //agrega una clase a los objeto de la lista;
        li.textContent = `${item.name} (x ${item.quantity}) - $${item.price}`;  //cambia el texto de los "li" creados.
        li.style.textDecoration = 'none';

        const removeBtn = document.createElement('button'); //creamos un boton que remueva el producto en caso de quererlo
        removeBtn.textContent = "❌";
        removeBtn.className = "close-modal";
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
    totalLi.className = "total"// le agrego una clase al total
    totalLi.textContent = `Total $${total}`;  //Sobreescribe el valor de la constante
    totalLi.style.fontWeight = 'bold';  //cambia el estilo a las letras
    cartList.appendChild(totalLi); //agrega la constante al final del modal

    if(total == 0){
        totalLi.textContent = "Todavia no realizo su pedido.";
    }

    if (cart.length > 0){
        const finalizeButton = document.createElement('button');
        finalizeButton.className = "btn-finalizar"
        finalizeButton.innerText = 'Finalizar compra';

        finalizeButton.addEventListener('click',()=>{
            Swal.fire({
                title: "¿Quiere realizar la compra?",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#a57825ff",
                cancelButtonColor: "rgba(179, 156, 114, 1)",
                confirmButtonText: "Si quiero realizar mi pedido!",
                cancelButtonText: 'Cancelar'
            }).then((result) => {
            if (result.isConfirmed) {
                cart = [];
                saveCart()
                updateCart()
                window.cartManager.resetCartCount();

                Swal.fire({
                    title: "¡Compra realizada!",
                    text: "Disfrute su pedido!!!",
                    icon: "success"
                });
            } 
        });
        })
        cartList.appendChild(finalizeButton)
    }
    saveCart();
}

cardsContainer.addEventListener('click', (e) => {
    
    if (!e.target.classList.contains('buy-btn')) return; // si el elemento de la card cliqueado no tiene la class "buy-btn" no se activa el evento

    const button = e.target; // la tiene el valor al elemento cliqueado valido
    const card = button.parentElement; // obtiene el valor del div padre mas cercano 
    const productName = card.querySelector('h4').textContent; // obtiene el valor del h4 de card 
    const productPrice = parseInt(card.querySelector('p').textContent.replace('$', ''));// quita los valores $ de los p de las cards para convertirlos en valor numerico

    const existingProduct = cart.find(item => item.name === productName); //revisa si el item fue agregado al carrito 
    if (existingProduct) {
        existingProduct.quantity++; //si el producto existe solo suma la cantidad
    } else {
        cart.push({ name: productName, price: productPrice, quantity: 1 }); // si no existe 
    }

    window.cartManager.addToCart(); //añade los productos al carrito
    updateCart();

    Toastify({
        text: "Se añado el producto al carrito",
        duration: 3000,
        style: { background: "#b69142" }
    }).showToast();
});

updateCart(); //carga los datos al iniciar la pagina



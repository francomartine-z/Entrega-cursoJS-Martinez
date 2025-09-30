let cart = []; //Aqui van guardados los productos.

const buyButtons = document.querySelectorAll('.buy-btn');  //Llama a todos los botones de compra.

const cartList = document.querySelector('.cart-list');  //Llama a la lista dentro del modal. 

function updateCart(){
    cartList.innerHTML = "" //limpia la lista
    let total = 0

    cart.forEach(item =>{
        const li = document.createElement('li');  //crea un elemento "li".
        li.textContent = `${item.name} - $${item.price}`;  //cambia el texto de los "li" creados.
        li.style.textDecoration = 'none';
        cartList.appendChild(li); //agrega el "li" al final de la lista del modal.
        total += item.price; //suma el valor del total con el valor del precio.
    })

    const totalLi = document.createElement('li');  //crea otro elemento li
    totalLi.textContent = `Total $${total}`;  //Sobreescribe el valor de la constante
    totalLi.style.fontWeight = 'bold';  //cambia el estilo a las letras
    cartList.appendChild(totalLi); //agrega la constante al final del modal
}

//agregar eventos a los botones

buyButtons.forEach(button =>{
    button.addEventListener('click',()=>{
        const card = button.parentElement; //accedo al elemento padre mas cercano al elemeto
        const productName = card.querySelector('h4').textContent; //la constante toma el valor del h4 
        const productPrice = parseInt(card.querySelector('p').textContent.replace('$','')) //replace quita el $ del texto y lo cambia por un espado vacia y con el parseInt le da valor numerico

        
        // crear objeto producto y agregar al carrito
        const product = { name: productName, price: productPrice };
        cart.push(product); //añade el prodcuto al array cart

        // actualizar la lista del modal
        updateCart();
    })
})
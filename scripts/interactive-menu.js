//maneja el menu interactivo del main

//Las constante llaman a todos los selectores de las clases seleccionadas
const categoryButtons = document.querySelectorAll('.category__button'); 


//Se usa forEach para recorrer toda la constante y asignarle la funcion button
categoryButtons.forEach(button => { 
    //Activamos un evento al precionar click en uno de los botones
    button.addEventListener('click', () => {
        //cambiamos el contenido de los botones a letras minusculas para que coincidan con las clases de las cards
        const category = button.textContent.toLowerCase();  

        //llama a la funcion de filtrar cards con la categoia de parametro
        filterCards(category);

        // quitar la clase active de todo
        categoryButtons.forEach(btn => btn.classList.remove('btn-active'));
        // agregar al que se clickeó
        button.classList.add('btn-active');
    });
});

function filterCards(category) {

    const cards = document.querySelectorAll('.card'); // llamamos a todos los elementos con clase .card
    //recorre todas las cards
    cards.forEach(card => {
        //si la categoria es estrictamente igual a la clase todo el display de las cards se activa y muestra todas
        if (category === 'todo') {
            card.style.display = 'flex';
        } //en caso de no ser igutaal a "todo" se vera a que categoria es igual dandole display:block; a la correcta y display:none; a la incorrecta  
        else {
            if (card.classList.contains(category)) {
                card.style.display = 'flex';
            } else {
                card.style.display = 'none';
            }
        }
    });
}

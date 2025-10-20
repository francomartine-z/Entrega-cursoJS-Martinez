setTimeout(()=>{
    const reminder = document.createElement('div');  //Crea un contenedor.
    reminder.className ='social-reminder';  //Definimos la clase del Div.
    //creamos el contenido del Div
    reminder.innerHTML = ` 
    <p>¡No olvides seguirnos en redes sociales!</p>
    <button id="close-reminder">✖</button>
    `;

    //Agregamos el contenedor al documento
    document.body.appendChild(reminder);

     setTimeout(() => reminder.classList.add('show'), 100); // agregamos la clase despues de crear el elemento

    //Cerrarlo al presionar la X
    const closeBtn = document.getElementById('close-reminder');
    closeBtn.addEventListener('click',()=>{
        reminder.classList.remove('show'); // Le quita la clase show.
        setTimeout(()=>reminder.remove(),500); // espera a que la animacion termine para elimanar el Div.
    })
}, 20000); 
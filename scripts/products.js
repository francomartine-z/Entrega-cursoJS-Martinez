async function obtenerProductos(){
    try{
        const respuesta = await fetch('data/products.json');  //Espera a que cargue los datos del JSON y da una respuesta
       
        if (!respuesta.ok){
            throw new Error('Error al obtener los productos'); //si hay un error en la respuesta marca un error y activa el catch
        }

        const data= await respuesta.json(); // espera a que la constante cargue correctamente para convertirla en JSON
        return data;

    } catch (error){
        console.error('error al cargar los productos',error); // marca el error en la consola
        const errorDiv = document.querySelector('#error.message'); //llama al id del div error 
        if (errorDiv){
            errorDiv.textContent = error.message; //pone un mensaje en el div 
            errorDiv.style.display = 'block'; // cambia el display
        }
        return[];
    } finally {
        console.log('tarea finalizada'); //retorna en la consola el mensaje indiferente al estado de la respuesta 
    }
}
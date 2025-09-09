let dia;
let hora;

//se usa este (do while) para pedir el dato que se requiere en caso de no tener la respuesta correcta se repite el ciclo.//
do{ 
    dia = prompt("¿Que dia es hoy? (Por favor responde con Lun, Mar, Mie, Jue, Vie, Sab o Dom).").toUpperCase();
    if(!["LUN","MAR","MIE","JUE","VIE","SAB","DOM"].includes(dia)){
        alert("Por favor! Responde con las primeras 3 letras del dia solicitado")
    }
}while (!["LUN","MAR","MIE","JUE","VIE","SAB","DOM"].includes(dia));

//Al igual que el bucle anterior pero esta vez para solicitar la hora//
do{
    hora = parseInt(prompt("¿Que hora es? (Por favor, responde con un maximo de dos digitos de 0 a 23)"));
    if (isNaN(hora) || hora < 0 || hora > 23) {
        alert("Por favor! respondecon los caracteres solicitados");
    }
}while (isNaN(hora) || hora < 0 || hora > 23);

let abierto = false;

//La siguiente funcion marca si el local esta abierto o no dependiendo de los datos del dia y hora que el usuario envia//
const localAbierto = () =>{
    if(["LUN","MAR","MIE","JUE","VIE"].includes(dia) && hora >= 7 && hora <= 23){
        abierto = true;
        alert("Bienvenido a nuestro negocio");
    }
    //Sab de 0 a 2 de la madrugada y 7 a 23//
    else if(dia === "SAB" && ((hora >= 0 && hora <= 2) || (hora >= 7 && hora <= 23))){
        abierto = true;
        alert("Bienvenido a nuestro negocio");
    }
    //Dom de 0 a 2 de la madrugada y 9 a 21//
    else if (dia === "DOM" && ((hora >= 0 && hora <= 2) || (hora >= 9 && hora <=21))){
        abierto=true;
        alert("Bienvenido a nuestro negocio");
    }
    else{
        alert("Lo sentimos!! nuestro negocio se encuentra cerrado.")
    }
}

//Los siguientes arrays tienen el menu y los precios de diferentes horarios//
let menuCafe = [
    ["Cafe Espresso", 3200],
    ["Cafe con leche", 3400],
    ["Capuccinno", 3800],
    ["Media Luna", 800],
    ["Tostado JyQ", 3200],
    ["Brownie", 1800]
]

let menuAlmuerzo = [
    ["Milanesa con papas fritas", 7000],
    ["Hamburguesa completa", 6500],
    ["Tortilla de papas", 5000],
    ["Ravioles con salsa bolognesa", 8500],
    ["Gaseosa 500ml", 3500],
    ["Agua mineral", 1800]
]

let menuCena = [
    ["Papas con cheddar", 8500],    
    ["Pizza", 15000],
    ["Tallarines con salsa", 8000],
    ["Milanesa Napolitana con guarnicion", 9500],
    ["Gaseosa 500ml", 3500],
    ["Agua mineral", 1800]
]    

let bebidasAlcoholicas = [
    ["Cerveza Rubia", 8000],    
    ["Cerveza Negra", 8500],    
    ["Fernet con Coca", 9000],
    ["Vino", 18000]
]

// esta funcion verifica la edad del usuario ya que hay bebidas alcoholicas en el menu/
let esMayor = false;
const verificarEdad = () =>{
     if(abierto){
    let edad= parseInt(prompt("¿Cual es tu edad?"));
        if (edad>=18){
            esMayor = true;
        }
    }
}

let total = 0;

const alertMenu = (menu) => {
    const letras = "ABCDEFGHIJKLMNOPQRSTUVWXYZ" //se utiliza la constante para asignar letras a las diferentes opciones del menu//
    let seguirPidiendo = true;

    while(seguirPidiendo){
       let texto = ""; 
       for(let i = 0; i < menu.length; i++){
            texto += letras[i] + ") " + menu[i][0] + " - $" + menu[i][1] + "\n";// el bucle va recorriendo la constante de letras y menu armando una lista de productos y precios//
        }
        
    let eleccion= prompt("Menú disponible:\n\n" + texto + "\n Escribe la letra de tu eleccion.");//El prompt encargado de recibir los pedidos del cliente//

    if(eleccion){
        eleccion = eleccion.toUpperCase();//pasa la letra elegida a mayuscula//
        let indice = letras.indexOf(eleccion);//recorre la constante con verificando que la opcion elegida este y dando la posicion de la misma//
        if(indice >= 0 && indice < menu.length){
            document.write(menu[indice][0] + " - $" + menu[indice][1] + "<br>");//arma una lista en la pagina sobre el pedido del cliente//
            total += menu[indice][1];//modifica el valor de la variable total por cada indice de precio de lo que selecciona el usuario//
            seguirPidiendo = confirm("¿Queres pedir algo mas?");//si cancelas la variable seguirPidiendo es false y por el bucle while se cancela// 
        }else{
            alert("Opcion no valida. Intenta de nuevo.")
        }
    }else{
        alert("Por favor, elegi una opcion")
    }
    }
}

const mostrarMenu = () => { //muestra el menu dependiendo de la hora y la edad// 
    if(abierto){
        if(hora >= 7 && hora < 12 || hora >= 16 && hora < 20){
        alertMenu(menuCafe);
        }
        if(hora >= 12 && hora < 16){
        alertMenu(menuAlmuerzo);
        }   
        if(hora >= 20){
        alertMenu(menuCena);
        }
    }
    if(abierto && esMayor && (hora >= 12 || (hora >=0 && hora <= 2))){
        alertMenu(bebidasAlcoholicas);
    } 
}


localAbierto();
verificarEdad();
mostrarMenu();
console.log("La cuenta es de $" + total);
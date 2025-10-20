 //creo la clase producto para crear las target de productos del carrito de compra
class Producto { 
  constructor(id, nombre, precio, categoria, imagen) {
    this.id = id;
    this.nombre = nombre;
    this.precio = precio;
    this.categoria = categoria;
    this.imagen = imagen;
  }
}

// Creamos los productos
const productos = [
  new Producto(1, "Espresso", 2200, "cafe", "#"),
  new Producto(2, "Doble Espresso", 2800, "cafe", "#"),
  new Producto(3, "Americano", 2800, "cafe", "#"),
  new Producto(4, "Cortado", 2800, "cafe", "#"),
  new Producto(5, "Macchiato", 2800, "cafe", "#"),
  new Producto(6, "Latte", 2800, "cafe", "#"),
  new Producto(7, "Capuccino", 3500, "cafe", "#"),
  new Producto(8, "Flat White", 3500, "cafe", "#"),
  new Producto(9, "2 Medialunas", 2800, "pasteleria", "#"),
  new Producto(10, "Cheesecake", 3800, "pasteleria", "#"),
  new Producto(11, "Lemon Pie", 3800, "pasteleria", "#"),
  new Producto(12, "Selvanegra", 3800, "pasteleria", "#"),
  new Producto(13, "Chocotorta", 3800, "pasteleria", "#"),
  new Producto(14, "Tiramisu", 3800, "pasteleria", "#"),
  new Producto(15, "Tostados de JyQ", 3200, "pasteleria", "#"),
  new Producto(16, "Croissants con JyQ", 3200, "pasteleria", "#"),
  new Producto(17, "Chipas 6 u.", 3000, "pasteleria", "#"),
  new Producto(18, "Tostadas", 2000, "pasteleria", "#"),
  new Producto(19, "Hamburguesas con Papas Fritas", 9500, "platos", "#"),
  new Producto(20, "Milanesa a la Napolitana con Guarnicion", 12000, "platos", "#"),
  new Producto(21, "Papas con Cheddar", 7000, "platos", "#"),
  new Producto(22, "Ensalada Cesar", 5000, "platos", "#"),
  new Producto(23, "Ensalada de Rucula, Tomate y Queso", 5000, "platos", "#"),
  new Producto(24, "Nachos con Guacamole", 7000, "platos", "#"),
  new Producto(25, "Nachos con Cheddar", 7000, "platos", "#"),
  new Producto(26, "Picada para 4", 25000, "platos", "#"),
  new Producto(27, "Pizza de muzzarella", 12000, "platos", "#"),
  new Producto(28, "Pizzas Especiales", 14000, "platos", "#"),
  new Producto(29, "Agua Mineral 600ml", 2000, "bebidas", "#"),
  new Producto(30, "Gaseosa linea Coca-Cola 355ml", 2500, "bebidas", "#"),
  new Producto(31, "Limonada 1L", 5000, "bebidas", "#"),
  new Producto(32, "Cerveza Quilmes Chopp", 4000, "bebidas", "#"),
  new Producto(33, "Cerveza Heineken Chopp", 5000, "bebidas", "#"),
  new Producto(34, "Cervezas Artesanales media pinta", 7000, "bebidas", "#"),
  new Producto(35, "Vino Botella", 12000, "bebidas", "#"),
  new Producto(36, "Fernet con Cola", 8000, "bebidas", "#"),
  new Producto(37, "Negroni", 9000, "bebidas", "#"),
  new Producto(38, "Gin Tonic", 8000, "bebidas", "#"),
  new Producto(39, "Mojito", 7000, "bebidas", "#")
];



async function obtenerProductos(){
    try{
        const respuesta = await new Promise((resolve)=>{
            setTimeout(()=>resolve({
                ok: true,
                json: async ()=> productos 
            }),1000);
        });

        if (!respuesta.ok){
            throw new Error('Error al obtener los productos');
        }

        const data = await respuesta.json();
        return data
    } catch(error){
        console.error('hubo un problema al obtener los datos de los productos',error);
        return[];
    } finally {
        console.log("consulta finalizada");
    }
}

window.obtenerProductos= obtenerProductos;
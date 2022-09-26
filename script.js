
class ElementosCarrito{
    constructor(producto,cantidad){
        this.producto = producto
        this.cantidad = cantidad
    }
}


let dolarVenta

// creamos dos arrays uno donde guardaremos nuestros productos y otro igual con la diferencia que van a ser mostrados en el carrito de compras

let productosCarrito = []
let productosJSON = []

// Agregamos un operador logico or
productosCarrito=JSON.parse(localStorage.getItem("Carrito De Compras"))|| [];



// Traemos del nuestro html
const tarjetas = document.getElementsByClassName("todo")[0];
const tarjetasCapsula = document.getElementsByClassName("tarjetasCapsula")[0];
const tarjetasCafetera = document.getElementsByClassName("tarjetasCafetera")[0];
const contenedorCarritoCompras = document.getElementById("items");
const footerCarrito = document.getElementById("footer");


// Definicion de funciones


    // con esta funcion vamos a mostrar en el modal del carrito, el o los productos que esten en el array productosCarrito
function ProductosEnCarrito(){
    
    let acumuladorPrecios = 0

    contenedorCarritoCompras.innerHTML=""
    productosCarrito.forEach(
        (elemento)=>{
            let renglonesCarrito = document.createElement("tr")
            renglonesCarrito.innerHTML =`
                
                    <td>${elemento.producto.id}</td>
                    <td>${elemento.producto.nombre}</td>
                    <td>${elemento.producto.descripcion}</td>
                    <td><input id= "cantidad-producto-${elemento.producto.id}" type="number" value="${elemento.cantidad}" min="1" max="1000" style="width: 50px"></td>
                    <td>$${elemento.producto.precio}</td>
                    <td>$${elemento.producto.precio*elemento.cantidad}</td>
                    <td><button id="eliminar-producto-${elemento.producto.id}" type="button" class="btn btn-danger">X</button></td>
                
                `

            contenedorCarritoCompras.append(renglonesCarrito)
            
            acumuladorPrecios+= elemento.producto.precio*elemento.cantidad


            let inputCantidadProducto = document.getElementById(`cantidad-producto-${elemento.producto.id}`)    
            inputCantidadProducto.addEventListener("change", cambiar)
            function cambiar(){
                let nuevaCantidad = inputCantidadProducto.value;
                elemento.cantidad = nuevaCantidad;
                ProductosEnCarrito();
            }
    


            let eliminarProducto = document.getElementById(`eliminar-producto-${elemento.producto.id}`)
            eliminarProducto.addEventListener("click",eliminar)
            function eliminar(){
                eliminarElemento(elemento)
                ProductosEnCarrito()
            }





            // recuperacion de datos del carrito
            
            const objetoAJson = JSON.stringify(productosCarrito) // pasamos el objeta a formato json
            localStorage.setItem("Carrito De Compras",objetoAJson)

        }


    )
    


    // condicional reducido a un operador ternario que muesta la suma de los precios de los productos y si no hay nada muestra el carrito vacio
    productosCarrito == 0 ? footerCarrito.innerHTML = `<th scope="row" colspan="5">Carrito vacío</th>` : footerCarrito.innerHTML = `<th scope="row" colspan="5">Total de la compra: $${acumuladorPrecios}</th>`;

    
    

    
}

function eliminarElemento(elementoAEliminar){
    let productosQueNoSeBorran = productosCarrito.filter((elemento)=>elementoAEliminar.producto.id != elemento.producto.id)
    productosCarrito.length = 0;

    productosQueNoSeBorran.forEach((elemento) => productosCarrito.push(elemento));
    Toastify({
        text: "Producto: "+elementoAEliminar.producto.nombre+" eliminado del carrito",
        duration: 2000,
        gravity: 'bottom',
        position: 'left',
        backgroundColor: "red"
    }).showToast();
}



    // con esta funcion vamos a crear nuestras cartas que van a contener los productos y ademas agregamos un evento en el cual al hacer click lo agregamos al array producto carrito.
function crearCarta(ProductoDeLaLista){
    
    

        let boton = document.createElement("button")
        boton.className = "btn btn-secondary"
        boton.innerText = "Agregar al Carrito"


        let cuerpoDeCarta = document.createElement("div")
        cuerpoDeCarta.className="card-body text-center"
        cuerpoDeCarta.innerHTML=`
            <h5 class="card-title nombres">${ProductoDeLaLista.nombre}</h5>
            <p class="card-text des-cafe">${ProductoDeLaLista.descripcion}</p>
            <h6 class="precio">Precio ARS$${ProductoDeLaLista.precio}</h6>
            <h6 class="precio">Precio US$${(ProductoDeLaLista.precio/dolarVenta).toFixed(1)}</h6>`

        cuerpoDeCarta.append(boton)    


        let contenedorCarta = document.createElement("div")
        contenedorCarta.className= "card-shop align-self-center"
        contenedorCarta.innerHTML=`
            <img src="${ProductoDeLaLista.imagen}" class="card-img-top img-cafe" alt="...">
        `

        contenedorCarta.append(cuerpoDeCarta)

        
        boton.addEventListener("click",agregar)
        function agregar(){

            let existe = productosCarrito.find((elemento)=>elemento.producto.id == ProductoDeLaLista.id)

            // operador ternario
            existe ? existe.cantidad+=1 : productosCarrito.push(new ElementosCarrito(ProductoDeLaLista,1))
         
            ProductosEnCarrito()

            Toastify({
                text: "Producto: "+ProductoDeLaLista.nombre+" agregado al carrito",
                duration: 2000,
                gravity: 'bottom',
                position: 'left',
                backgroundColor: "green"
            }).showToast();
            
        }
        return contenedorCarta
    
}


    // dentro de esta funcion vamos a recorrer cada producto guardado en el array de listaDeProductos y al ejecutar la funcion crearcarta() vamos a ir creando una carta por cada producto que hay y se va a ir mostrando en el HTMl
function TodosLosProductos(){
    productosJSON.forEach(
        (producto)=>{
            let TodasLasCartas = crearCarta(producto)
            if(producto.id<4){
                tarjetas.append(TodasLasCartas)
            }
            else if((producto.id > 3)&&(producto.id <= 6)){
                tarjetasCapsula.append(TodasLasCartas)
            }else{
                tarjetasCafetera.append(TodasLasCartas)
            }
        }
    )
}

// funcion que redirecciona a mercadopago cuando queremos realizar una compra.
function redireccion(){

    let botonesModal= document.getElementsByClassName("contenedor_botones_modal")[0]
    botonesModal.innerHTML = `<button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>`

    let botonRedirigir = document.createElement("button")
    botonRedirigir.className = ("btn btn-primary")
    botonRedirigir.innerHTML =`<a href="#" style="color:white; text-decoration: none;" >Finalizar Compra</a>`

    botonRedirigir.addEventListener("click",redirigir)

    let segundos = 5
    function redirigir(){
        
        Swal.fire(
            'Redireccionando a mercado pago para que complete su compra',
            segundos +" segundos",
            'success'
        )
        if (segundos == -1){
            location.href = "https://www.mercadopago.com"
        }
        else{
            segundos--;
            setTimeout(redirigir,1000)
        }
        
    }

    botonesModal.append(botonRedirigir)
}


async function obtenerJSON() {
    const URLJSON="productos.json"
    const resp=await fetch(URLJSON)
    const data= await resp.json()
    productosJSON = data;
    TodosLosProductos()
   
}


//api del cual obtenemos el valor del dolar
async function obtenerValorDolar() {
    const URLDOLAR = "https://api.bluelytics.com.ar/v2/latest";
    const resp=await fetch(URLDOLAR)
    const data=await resp.json()
    document.getElementById("fila_prueba").innerHTML+=(`<p>Dolar compra: $ ${data.blue.value_buy}  Dolar venta: $ ${data.blue.value_sell}</p>`);
    dolarVenta = data.blue.value_sell;
    obtenerJSON()
}




// ejecucion funciones




ProductosEnCarrito()

TodosLosProductos()

redireccion()

obtenerValorDolar()

















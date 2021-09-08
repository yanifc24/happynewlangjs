let carrito = [];
let precioGlobal = 0;
//Armo un array con objetos sobre productos de la tienda online
let productos = [
{ id: 0,  articulo: "Clase de teatro",img:"../Imagenes/drama500.jpg", precio: 1500, caracteristicas:"Valor por clase de 1 hora",stock:3},
{ id: 1,  articulo: "Juego con números y letras", img:"../Imagenes/letras1.JPG", precio: 1170, caracteristicas:"Recomendado para menores de 6 años",stock:5 },
{ id: 2,  articulo: "Jornada lúdica para niños",img:"../Imagenes/jornada500.jpg"  , precio: 1600,caracteristicas:"Duración de 2 horas",stock:40},
{ id: 3,  articulo: "Práctica de conversación" , img:"../Imagenes/conversacion500.jpg",precio: 2100, caracteristicas:"1 hora con un docente nativo",stock:10},
{ id: 4,  articulo: "Summer camp",img:"../Imagenes/camp.jpg", precio: 27000, caracteristicas:"Incluye 10 días de diversión", stock:14},
{ id: 5,  articulo: "Libro actividades exámenes FCE" , img:"../Imagenes/libro.jpg",precio: 3000, caracteristicas: "Incluye audios y auriculares", stock: 9}
];
console.log(productos);
$(document).ready(function(){
  productos.forEach(el => {
    let miHtml = document.querySelector("#products-container");
    miHtml.innerHTML +=
    `
        <div class="col-md-3 col-xl-4 col-sm-12 mt-3">
            <article class="card text-center">
               <img class="w-100"
                  src="imagenes/${el.img}"
                   class="card-img-top" alt="">
                <div class="card-body">
                   <h5>${el.id}</h5>
                   <h5 class="card-title">${el.articulo}</h5>
                   <h6 name="precio">$${el.precio}</h6>
                   <p class="card-text">${el.caracteristicas}</p>
                   <button id="${el.articulo}" class="btn btn-outline-dark">COMPRAR</button>
                </div>
            </article>
        </div>
    `
});
        //Carrito de compras
        let agregarCarrito = (datos) => {
          let respuesta = document.getElementById("carrito")
            const productoPorTitulo = productos.filter((prod)=>prod.articulo == datos.currentTarget.id);
            carrito.push(productoPorTitulo[0])
            let trs = '';
            let precio = 0;
          let cabezal = ` <table class='table'>
                <tr>
                    <td>Producto</td>
                    <td>Precio</td>
                </tr>
                  `
           for (let i=0;i<carrito.length;i++) {
                trs += `<tr>
                          <td><b>${carrito[i].articulo}</b></td>
                          <td>$ ${carrito[i].precio}</td>
                        </tr>
                        `
              precio = precio + parseInt(carrito[i].precio)
            }
          let pie = `
                    <tr>
                       <td>TOTAL</td>
                       <td id="precioTotal">$${precio}</td>
                     </tr>
                     <tr>
                        <td></td>
                        
                        <td><button class="btn btnComprar btn-outline-dark" onclick="pagar();">INICIAR COMPRA</button></td>
                        
                    </tr>
                    </table>
                    <p>Retirar por nuestra tienda </p><img src="Imagenes/tienda.png" width="25px" alt="tienda"</p>
                    <p>En caso de comprar una actividad o clase se recibirá un voucher por correo electrónico.</p>
                    <p>Medios de pago: Débito y efectivo</p>`

          itemAgregado = cabezal + trs + pie
          respuesta.innerHTML =itemAgregado
          precioGlobal = precio
        }
        $(".btn-outline-dark").on("click",agregarCarrito);
      
 
})

function pagar() {
  if (precioGlobal == 0) {
      let carritoFinal = document.getElementById("carrito")
      carritoFinal.style.display = "none";
  } else {
      let carritoFinal = document.getElementById("carrito")
      let carritoTexto = "";
      for (let i=0;i<carrito.length;i++) {
            carritoTexto += carrito[i].articulo + "<br>"
          }
      carritoFinal.innerHTML = "Usted compró los siguientes productos:" + carritoTexto +"El total de la compra es de : $" + precioGlobal ;
  }
}    


//Función para aplicar un descuento del 30%
function aplicarDescuento(nro) {
  let precios = document.getElementsByName('precio')
  console.log(precios[nro])
  let precioOriginal = productos.filter((producto)=>producto.id == nro)
  precios[nro].innerHTML = ("$"+ precioOriginal[0].precio * 0.7)
  let precioConDescuento = precioOriginal[0].precio * 0.7
  precios[nro].innerHTML = `<img src="Imagenes/sale.png" width="32px" alt=""><span class="strikethrough">$ ${precioOriginal[0].precio} </span>$ ${precioConDescuento}`
  
  //hago un objeto al que le modifico el precio para que vaya al carrito en caso de descuento
  const objetoTemporal = {
    id: precioOriginal[0].id,
    articulo: precioOriginal[0].articulo,
    img: precioOriginal[0].img,
    precio: precioConDescuento,
    caracteristicas: precioOriginal[0].caracteristicas,
    stock: precioOriginal[0].stock
  }
  //saco el producto seleccionado
  let arraySinProductoSeleccionado = productos.filter((producto)=>producto.id != nro);
  //agrego el producto seleccionado con otro precio
  arraySinProductoSeleccionado.push(objetoTemporal);
  //reemplazo el array original por este nuevo
  productos = arraySinProductoSeleccionado;
}

//Animaciones encadenadas (ventas.html)
$("h1").css("color", "purple")
.slideUp("slow")
.delay(1000)
.slideDown("slow");
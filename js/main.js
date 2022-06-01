
class Prendas
{
    constructor(id,prenda,talle,cantidad,precio)
    {
        this.id=id;
        this.prenda=prenda;
        this.talle=talle;
        this.cantidad=cantidad;
        this.precio=precio;
    }
}

const prendas1 = new Prendas(1, "Remera overzise", "S", 7, 2800)
const prendas2 = new Prendas(2, "Pantalon", "M", 6, 3000)

let arrayPrendas = [];

if(localStorage.getItem("arrayPrendas"))
{
    arrayPrendas = JSON.parse(localStorage.getItem("arrayPrendas"));
}
else{
    arrayPrendas = [prendas1,prendas2];
}

console.log("array", arrayPrendas);




iniciarApp();

function iniciarApp()
{
    const tituloH1 = document.createElement("h1")
    tituloH1.innerHTML= "SISTEMA DE INVENTARIO";
    document.body.appendChild(tituloH1);

    const tituloH2 = document.createElement("h2");
    tituloH2.innerHTML= "Aqui se veran los resultados";
    document.body.appendChild(tituloH2);


}

botones();

function botones()
{
    let opciones = ["Inventario", "Agregar Prenda", "Buscar Prenda"]
    opciones.forEach((opcion)=>{

    const boton = document.createElement("button");

    if(opcion === "Inventario")
    {
        boton.addEventListener("click", ()=>{
            inventario(arrayPrendas);
        })
    }

    else if(opcion === "Agregar Prenda")
    {
        boton.addEventListener("click", ()=>{
            agregarPrenda();
            inventario(arrayPrendas);

        })
    }

    else if(opcion === "Buscar Prenda")
    {
        boton.addEventListener("click", ()=>{
            let filtrado = buscarPrenda();

            inventario(filtrado);
        })
    }

    boton.innerHTML=opcion;
    document.body.appendChild(boton);
    });







}




function agregarPrenda()
{
    let id=1;
     if(arrayPrendas.length>0)
     {
        id=arrayPrendas[arrayPrendas.length-1].id+1;
     }
    let prenda = prompt("Nombre del producto");
    let talle = prompt("Talle del producto");
    let cantidad = Number(prompt("Cantidad del producto"));
    let precio = Number(prompt("Precio del producto"));

    let articulos = new Prendas(id,prenda,talle,cantidad,precio);
    arrayPrendas.push(articulos);


    localStorage.setItem("prendas", JSON.stringify(arrayPrendas));

}

function inventario(buscar)
{
    let inventario = document.querySelector("#inventarioPrendas");
    if(!inventario)
    {
        inventario = document.createElement("ul");
        inventario.setAttribute("id", "inventarioPrendas");
    }
    inventario.innerHTML="";

    

    buscar.forEach((prenda) =>{
        const nodoli = document.createElement("li");
        nodoli.innerHTML=`Prenda: ${prenda.prenda} - Talle: ${prenda.talle} - Precio: $${prenda.precio}`;

        inventario.appendChild(nodoli);
    });

    document.body.appendChild(inventario);


}

function eliminarPrenda()
{
    let id = Number(prompt("Ingrese el id de la prenda que desea eliminar"))

    let buscar = arrayPrendas.find((prenda)=>prenda.id===id);

    if(!buscar)
    {
        alert("Este articulo no existe")
    }
    else{
        let index = arrayPrendas.indexOf(buscar);

        arrayPrendas.splice(index,1)
        console.log("ARTICULO ELIMINADO", arrayPrendas);
    }

}

function buscarPrenda()
{
    let nombre= prompt("INGRESE LA PRENDA QUE DESEA BUSCAR");

    let encontrados = arrayPrendas.filter((articulo)=>articulo.prenda.toLowerCase().indexOf(nombre.toLowerCase())!==-1);
    
    return encontrados;


}

function modificarPrenda()
{
    let id = Number(prompt("INGRESE EL ID DE LA PRENDA QUE QUIERE MODIFICAR"));

    let busqueda = arrayPrendas.some((elemento)=>elemento.id===id);

    if (busqueda)
    {
        let buscar = arrayPrendas.find((prenda)=>prenda.id===id);
        let nuevaPrenda = prompt("INGRESE LA NUEVA PRENDA");
        let nuevoTalle = prompt("INGRESE EL TALLE NUEVO");
        let nuevaCantidad = prompt("INGRESE EL STOCK MODIFICADO");
        let nuevoPrecio = prompt("INGRESE INGRESE EL NUEVO PRECIO");

        buscar.prenda=nuevaPrenda;
        buscar.talle=nuevoTalle;
        buscar.cantidad=nuevaCantidad;
        buscar.precio=nuevoPrecio;

        console.log("MODIFICACION:", arrayPrendas);
    }
    else{
        alert("PRENDA NO EXISTENTE")
    }
}


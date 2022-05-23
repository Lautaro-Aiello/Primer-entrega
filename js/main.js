
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
const prendas2 = new Prendas(2, "Remera", "M", 6, 3000)

const arrayPrendas = [prendas1,prendas2];

menuCompras()

function menuCompras()
{
    let opcion=0
    while(opcion!==6)
    {
        opcion = Number(prompt(`Elija una opcion:
                                     1.Agregar Prenda
                                     2.Eliminar Prenda
                                     3.Modificar Prenda
                                     4.Inventario
                                     5.Buscar Prenda
                                     6.Salir`));
        
        switch(opcion)
        {
            case 1:
                {
                    agregarPrenda();
                    break;
                }
            case 2:
                {
                    eliminarPrenda();
                    break;
                }
            case 3:
                {
                    modificarPrenda();
                    break;
                }
            case 4:
                {
                    inventario();
                    break;
                }
            case 5:
                {
                    buscarPrenda();
                    break;
                }
            default:{
                alert("Opcion invalida");
                break;
            }
        }                             
    }
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

}

function inventario()
{
    console.log("INVENTARIO");
    arrayPrendas.forEach((prendas)=>{
        console.log(prendas);
    })
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
    console.log("BUSCAR USUARIOS:", encontrados);
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
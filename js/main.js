//CREACION DE OBJETO + METODO CONSTRUCTOR CON ARGS + METODOS
class Polera {
    //Metodo constructor para instanciar objeto
    constructor(nombre,precio,detalle,cantidad,talla){
        this.nombre = nombre;
        this.precio = parseFloat(precio);
        this.detalle = detalle;
        this.cantidad = cantidad;
        this.disponible = true;
        this.talla = talla;
    }
    //Metodos
    sumarIva(){
        return this.precio * 1.21;
    }
    vender(){
        this.disponible = false;
    }
    precioSugerido(){
        return this.precio*1.21*1.25;
    }

}
//DECLARACIÓN E INGRESO DE POLERAS AL ARRAY
const arrayPoleras = [];
let comprobacion;
do{
    comprobacion = prompt("Ingrese un nombre de polera o escriba FIN para terminar.");

    if(comprobacion === "fin" || comprobacion === "FIN" || comprobacion === "Fin"){
        break;
    }else{
        nombre = comprobacion;
        let precio = prompt("Ingrese el precio de la polera");
        let detalle = prompt("Ingrese el detalle de la polera");
        let cantidad = prompt("Ingrese la cantidad de la polera");
        let talla = prompt("Ingrese la talla de la polera");
        arrayPoleras.push(new Polera(nombre,precio,detalle,cantidad,talla));
    }
    
}while(comprobacion != "fin" || comprobacion != "FIN"|| comprobacion != "Fin")
//Impresión por consola
console.log("Listado de Poleras:");
console.log(arrayPoleras);

//Escribir en documento array de poleras.
document.write("<h1>Primera entrega - Proyecto Coder</h1>");
document.write("<h3>Listado de Poleras:</h3>");

for(const polera of arrayPoleras){
    document.write("<ul><li><h3>Nombre: "+ polera.nombre+ "</h3></li>");
    document.write("<li><h3>Detalle: "+ polera.detalle+ "</h3></li>");
    document.write("<li><h3>Cantidad: "+ polera.cantidad+ "</h3></li>");
    document.write("<li><h3>Talla: "+ polera.talla+ "</h3></li>");
    document.write("<li><h3>Precio Bruto: "+ polera.precio+ "</h3></li>");
    document.write("<li><h3>Precio Neto: "+ polera.sumarIva() + "</h3></li></ul>");
    document.write("<br>");
}

//FILTRO DE ARRAY -> PRODUCTOS BAJO STOCK
//Criterio <= 3
const polerasBajoStock = arrayPoleras.filter(polera => polera.cantidad<=3);
//Impresión por consola
console.log("Poleras con bajo stock, se sugiere comprar nuevamente");
console.log(polerasBajoStock);
//Escribir en documento
document.write("<h3>Lista de poleras con stock bajo(<=3 unidades):</h3>");

for(const polera of polerasBajoStock){
    document.write("<ul><li><h3>Nombre: "+ polera.nombre+ "</h3></li>");
    document.write("<li><h3>Detalle: "+ polera.detalle+ "</h3></li>");
    document.write("<li><h3>Cantidad: "+ polera.cantidad+ "</h3></li></ul>");
    document.write("<br>");
}

//FILTRO DE ARRAY -> PRODUCTOS SIN STOCK
//Criterio = 0
const poleraSinStock = arrayPoleras.filter(polera => polera.cantidad==0 || polera.disponible == false);
//Impresión por consola
console.log("Poleras sin stock, se sugiere comprar nuevamente");
console.log(poleraSinStock);
//Escribir en documento.
document.write("<h3>Lista de poleras sin stock:</h3>");

for(const polera of poleraSinStock){
    document.write("<ul><li><h3>Nombre: "+ polera.nombre+ "</h3></li>");
    document.write("<li><h3>Detalle: "+ polera.detalle+ "</h3></li>");
    document.write("<li><h3>Cantidad: "+ polera.cantidad+ "</h3></li></ul>");
    document.write("<br>");
}

//BUSQUEDA DE POLERA POR NOMBRE
let ingresado = prompt("Ingresar el nombre de la polera a buscar");
let poleraIngresado = arrayPoleras.filter(polera => polera.nombre.includes(ingresado));
//Impresion por consola
console.log("Buscando Poleras que contengan nombre " + ingresado);
console.log(poleraIngresado);
//Escribir en documento
document.write("<>Polera(s) que contengan nombre:"+ingresado+"</h3>");
for(const polera of poleraIngresado){
    document.write("<ul><li><h3>Nombre: "+ polera.nombre+ "</h3></li>");
    document.write("<li><h3>Detalle: "+ polera.detalle+ "</h3></li>");
    document.write("<li><h3>Cantidad: "+ polera.cantidad+ "</h3></li></ul>");
    document.write("<br>");
}

//ORDENAR POLERAS -> POR CANTIDAD
let polerasCantidad = arrayPoleras.map(elemento => elemento);
polerasCantidad.sort(function(a,b){
    return a.cantidad - b.cantidad;
})
//Impresion pro consola
console.log("Ordenados por cantidad Ascendente:");
console.log(polerasCantidad);
//Escribir en documento
document.write("<h3>Poleras ordenadas por cantidad ASC:</h3>");

for(const polera of polerasCantidad){
    document.write("<ul><li><h3>Nombre: "+ polera.nombre+ "</h3></li>");
    document.write("<li><h3>Detalle: "+ polera.detalle+ "</h3></li>");
    document.write("<li><h3>Cantidad: "+ polera.cantidad+ "</h3></li></ul>");
    document.write("<br>");
}

//ORDENAR POLERAS -> POR PRECIO
let polerasPrecio = arrayPoleras.map(elemento => elemento);
polerasPrecio.sort(function(a,b){
    return b.cantidad - a.cantidad;
})
//Imprimir por consola
console.log("Ordenados por precio descendente:");
console.log(polerasPrecio);
//Escribir en documento
document.write("<h3>Poleras ordenadas por precio DESC:</h3>");

for(const polera of polerasPrecio){
    document.write("<ul><li><h3>Nombre: "+ polera.nombre+ "</h3></li>");
    document.write("<li><h3>Detalle: "+ polera.detalle+ "</h3></li>");
    document.write("<li><h3>Precio: "+ polera.precio+ "</h3></li></ul>");
    document.write("<br>");
}
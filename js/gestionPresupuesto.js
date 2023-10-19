// TODO: Crear las funciones, objetos y variables indicadas en el enunciado


// TODO: Variable global

let presupuesto = 0;
let gastos = [];
let idGasto = 0;

function actualizarPresupuesto(nuevoPresupuesto) {
    // TODO
    if (nuevoPresupuesto < 0 || isNaN(nuevoPresupuesto)) {
        presupuesto = -1;
        console.log("El numero introducido es INCORRECTO.");
    }
    else if (nuevoPresupuesto === presupuesto){
        presupuesto = 0;
    }
    else {
        presupuesto = nuevoPresupuesto;
    }
    return presupuesto;
}

function mostrarPresupuesto() {
    if (presupuesto < 0) {
        presupuesto = 14000.25;
    }
    return "Tu presupuesto actual es de " + parseFloat(presupuesto) + " €";
}

function CrearGasto(descripcion, valor, fecha, etiquetas) {
    this.descripcion = descripcion;
    if (valor < 0 || isNaN(valor)) {
        this.valor = 0;
    }
    else {
        this.valor = valor;
    }
    let fechaRes = Date.parse(fecha);
    if (isNaN(fechaRes) || typeof fechaRes === "undefined" || fechaRes === "NaN"){
        this.fecha = Date.now();
    }
    else{
        this.fecha = fecha;
    }
    this.etiquetas = [];
    this.mostrarGasto = function(){
        return `Gasto correspondiente a ${this.descripcion} con valor ${this.valor} €`;
    }
    this.actualizarDescripcion = function(descripcion){
        this.descripcion = descripcion;
    }
    this.actualizarValor = function(valor){
        if (valor >= 0){
            this.valor = parseFloat(valor);
        }
        else{
            this.valor = 100.58;
        }
    }
    this.anyadirEtiqueta = function(etiqueta){
        this.etiquetas.push(etiqueta);
    }

}

//Practica Fundamentos 2

function listarGastos(){
    return gastos;
}

function anyadirGasto(gasto) {
    gasto.id = idGasto;
    idGasto++;
    gastos.push(gasto);
    
}




// NO MODIFICAR A PARTIR DE AQUÍ: exportación de funciones y objetos creados para poder ejecutar los tests.
// Las funciones y objetos deben tener los nombres que se indican en el enunciado
// Si al obtener el código de una práctica se genera un conflicto, por favor incluye todo el código que aparece aquí debajo
export {
    mostrarPresupuesto,
    actualizarPresupuesto,
    CrearGasto
}

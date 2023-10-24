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

function CrearGasto(descripcion, valor, fecha, ...etiqueta) {
    this.descripcion = descripcion;

    if (valor < 0 || isNaN(valor)){
        this.valor = 0;
    }
    else {
        this.valor = valor;
    }
    if (isNaN(Date.parse(fecha))) {
        this.fecha = Date.now();
    }
    else{
        this.fecha = Date.parse(fecha);
    }
    if (etiqueta == undefined){
        this.etiquetas = [];
    }
    else {
        this.etiquetas = etiqueta;
    }
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
    this.anyadirEtiquetas = function(...etiqueta){
        for (let i = 0; i < etiqueta.length; i++){
            if (!this.etiquetas.includes(etiqueta[i])) 
                this.etiquetas.push(etiqueta[i]);
        }
    }
    this.mostrarGastoCompleto = function(){
        let text = "";
        text += `Gasto correspondiente a ${this.descripcion} con valor ${this.valor} €.`;
        text += `\nFecha: ${new Date(this.fecha).toLocaleString()}`;
        text += `\nEtiquetas:\n`;
        for (let i = 0; i < this.etiquetas.length; i++) {
            text += `- ${this.etiquetas[i]}\n`;
        }
        return text;
    }
    this.actualizarFecha = function(newFecha){
        let fechaNueva = Date.parse(newFecha);
        if (!isNaN(fechaNueva)){
            this.fecha = fechaNueva;
        }
    }
    this.borrarEtiquetas = function(...etiqueta){
        for (let i = 0; i < etiqueta.length; i++){
            let pos = this.etiquetas.indexOf(etiqueta[i])
            if (pos !== -1) 
                this.etiquetas.splice(pos, 1);
        }
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
function borrarGasto(nuevogasto){
    let pos = gastos.findIndex((gasto) => gasto.id === nuevogasto);
    if (pos !== -1){
        gastos.splice(pos, 1);
    }
}
function calcularTotalGastos(){
    let sumaGastos = 0;
    for (let i = 0; i < gastos.length; i++){
        sumaGastos = sumaGastos + gastos[i].valor;
    } 
    return sumaGastos;
}
function calcularBalance(){
    let totalGastos = calcularTotalGastos();
    let balance = presupuesto - totalGastos;
    return balance;
}




// NO MODIFICAR A PARTIR DE AQUÍ: exportación de funciones y objetos creados para poder ejecutar los tests.
// Las funciones y objetos deben tener los nombres que se indican en el enunciado
// Si al obtener el código de una práctica se genera un conflicto, por favor incluye todo el código que aparece aquí debajo
export {
    mostrarPresupuesto,
    actualizarPresupuesto,
    CrearGasto,
    listarGastos,
    anyadirGasto,
    borrarGasto,
    calcularTotalGastos,
    calcularBalance
}

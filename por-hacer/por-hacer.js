const fs = require('fs');

let ListadoPorHacer = [];


const getListado=()=>{
    cargarBD();
    return ListadoPorHacer;
}

const cargarBD = ()=>{
    try{
        ListadoPorHacer = require('../DB/data.json');
    }catch(error){
        ListadoPorHacer = [];
    }
}

let GuardarDB =()=>{
    let data = JSON.stringify(ListadoPorHacer);
    fs.writeFile('DB/data.json',data, (err)=>{
        if(err) console.log('No se pudo Grabar',err);
    });
}
let crear = (descripcion =>{

    cargarBD();
    let porHacer = {
        descripcion,
        completado: false
    }
    ListadoPorHacer.push(porHacer);
    GuardarDB();
    return porHacer;
});

const actualizar=(descripcion,completado) =>{
    cargarBD();
    let index = ListadoPorHacer.findIndex( tarea =>tarea.descripcion === descripcion);
    if(index>=0){
        ListadoPorHacer[index].completado = completado;
        GuardarDB();
        return true;
    }else{
        return false;
    }
}

const borrar=(descripcion)=>{
    cargarBD();
    let NuevoListado = ListadoPorHacer.filter( tarea => tarea.descripcion !== descripcion)

    if(ListadoPorHacer.length === NuevoListado.length){
        return false;
    }else{
        ListadoPorHacer = NuevoListado;
        GuardarDB();
        return true;
    }
}

module.exports = {
    crear,
    getListado,
    actualizar,
    borrar
}
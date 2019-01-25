const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Descripcion de la Tarea por hacer'
}
const completado = {
    alias: 'c',
    default: true,
    desc: 'Marca como completado o pendiente la tarea'
}

const argv = require('yargs')
.command('crear','Crea un elemnto por hacer',{
    descripcion
})
.command('actualizar','Actualiza el estado completado de una tarea',{
    descripcion,
    completado
})
.command('borrar','Borra una Tarea',{
    descripcion
})
.help()
.argv;

module.exports = {
    argv
}
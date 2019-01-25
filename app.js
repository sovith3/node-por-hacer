
const argv = require('./config/yargs').argv;
var colors = require('colors');
const porHacer = require('./por-hacer/por-hacer');
let comando = argv._[0];
switch(comando){
    case 'crear':
    console.log(porHacer.crear(argv.descripcion));
    break;
    case 'listar':
    let listado = porHacer.getListado();

    for (let tarea of listado){
        console.log('======TAREA========'.green);
        console.log(tarea.descripcion);
        console.log('Estado: ',tarea.completado);
        console.log('==================='.green);
    };

    break;
    case 'actualizar':
    let resultado = porHacer.actualizar(argv.descripcion,argv.completado);
    console.log(resultado);
    break;
    case 'borrar':
    let borrado = porHacer.borrar(argv.descripcion);
    console.log(borrado);
    break;
    default:
    console.log('Comando no reconocido');
    break;
}

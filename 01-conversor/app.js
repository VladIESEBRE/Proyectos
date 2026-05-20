import { argv } from './config/yargs.js';
import { convertirLongitud } from './helpers/longitud.js';
import { convertirTemperatura } from './helpers/temperatura.js';

const unidadesLongitud = ['mm', 'cm', 'dm', 'm', 'dam', 'hm', 'km'];
const unidadesTemperatura = ['celsius', 'fahrenheit', 'kelvin'];

try {
  let resultado;

  if (unidadesLongitud.includes(argv.from)) {
    resultado = convertirLongitud(argv.value, argv.from, argv.to);
  } else if (unidadesTemperatura.includes(argv.from)) {
    resultado = convertirTemperatura(argv.value, argv.from, argv.to);
  } else {
    throw new Error(`Unidad no reconocida: ${argv.from}`);
  }

  console.log(`${argv.value} ${argv.from} = ${resultado} ${argv.to}`);

} catch (error) {
  console.error('❌ Error:', error.message);
}
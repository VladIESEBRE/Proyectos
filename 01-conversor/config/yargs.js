import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';

export const argv = yargs(hideBin(process.argv))
  .option('value', {
    alias: 'v',
    type: 'number',
    demandOption: true,
    describe: 'Valor numérico a convertir'
  })
  .option('from', {
    alias: 'f',
    type: 'string',
    demandOption: true,
    describe: 'Unidad de origen (mm, cm, m, km, celsius, fahrenheit, kelvin...)'
  })
  .option('to', {
    alias: 't',
    type: 'string',
    demandOption: true,
    describe: 'Unidad de destino'
  })
  .usage('Uso: $0 --value=<número> --from=<unidad> --to=<unidad>')
  .help()
  .argv;
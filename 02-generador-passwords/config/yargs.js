import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';

export const argv = yargs(hideBin(process.argv))
  .option('length', {
    alias: 'l',
    type: 'number',
    default: 12,
    describe: 'Longitud de la contraseña'
  })
  .option('uppercase', {
    alias: 'u',
    type: 'boolean',
    default: false,
    describe: 'Incluir letras mayúsculas'
  })
  .option('numbers', {
    alias: 'n',
    type: 'boolean',
    default: false,
    describe: 'Incluir números'
  })
  .option('symbols', {
    alias: 's',
    type: 'boolean',
    default: false,
    describe: 'Incluir símbolos'
  })
  .option('save', {
    type: 'string',
    describe: 'Ruta del archivo donde guardar la contraseña (opcional)'
  })
  .usage('Uso: $0 --length=<n> [--uppercase] [--numbers] [--symbols] [--save=<archivo>]')
  .help()
  .argv;
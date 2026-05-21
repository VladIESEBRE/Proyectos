import fs from 'fs';
import { argv } from './config/yargs.js';
import { generarPassword } from './helpers/generador.js';

try {
  const password = generarPassword(argv.length, {
    uppercase: argv.uppercase,
    numbers:   argv.numbers,
    symbols:   argv.symbols
  });

  console.log('🔐 Contraseña generada:', password);

  if (argv.save) {
    fs.appendFileSync(argv.save, password + '\n');
    console.log(`💾 Guardada en ${argv.save}`);
  }

} catch (error) {
  console.error('❌ Error:', error.message);
}
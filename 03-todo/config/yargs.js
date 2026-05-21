import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';

export const argv = yargs(hideBin(process.argv))
  .command('add', 'Añadir una nueva tarea', (yargs) => {
    return yargs.option('desc', {
      alias: 'd',
      type: 'string',
      demandOption: true,
      describe: 'Descripción de la tarea'
    });
  })
  .command('list', 'Listar todas las tareas')
  .command('complete', 'Marcar una tarea como completada', (yargs) => {
    return yargs.option('id', {
      type: 'number',
      demandOption: true,
      describe: 'ID de la tarea a completar'
    });
  })
  .command('delete', 'Eliminar una tarea', (yargs) => {
    return yargs.option('id', {
      type: 'number',
      demandOption: true,
      describe: 'ID de la tarea a eliminar'
    });
  })
  .command('listPending', 'Listar solo las tareas pendientes', (yargs) => {
    return yargs.option('pending', { 
      type: 'boolean',
      default: true,
      describe: 'Filtrar solo tareas pendientes'
    });
  })
  .command('listCompleted', 'Listar solo las tareas completadas', (yargs) => {
    return yargs.option('completed', {
      type: 'boolean',
      default: true,
      describe: 'Filtrar solo tareas completadas'
    });
  })
  .command('clear', 'Eliminar todas las tareas completadas ', (yargs) => {
    return yargs.option('clear', {
      type: 'boolean',
      default: true,
      describe: 'Eliminar todas las tareas completadas'
    });
  })
  .demandCommand(1, 'Tienes que indicar un comando: add, list, complete, delete o listPending, listCompleted, clear')
  .help()
  .argv;
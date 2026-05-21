import { argv } from './config/yargs.js';
import {
  addTarea,
  listTareas,
  completeTarea,
  listTareasPendientes,
  listTareasCompletadas,
  clearTareasCompletadas,
  deleteTarea
} from './helpers/tareas.js';

const comando = argv._[0];

try {
  switch (comando) {

    case 'add': {
      const tarea = addTarea(argv.desc);
      console.log(`✅ Tarea creada con id ${tarea.id}: "${tarea.descripcion}"`);
      break;
    }

    case 'list': {
      const tareas = listTareas();
      if (tareas.length === 0) {
        console.log('📭 No tienes tareas. ¡Añade alguna con "add"!');
        break;
      }
      console.log('📋 Tus tareas:');
      tareas.forEach(t => {
        const estado = t.completada ? '✅' : '⬜';
        const fecha = t.fechaCreacion.split('T')[0]; // solo YYYY-MM-DD
        console.log(`  [${t.id}] ${estado} ${t.descripcion}  (${fecha})`);
      });
      break;
    }

    case 'complete': {
      const tarea = completeTarea(argv.id);
      console.log(`✅ Tarea ${tarea.id} marcada como completada`);
      break;
    }

    case 'delete': {
      deleteTarea(argv.id);
      console.log(`🗑️  Tarea ${argv.id} eliminada`);
      break;
    }

    case 'listPending': {
      const tareas = listTareasPendientes();
      if (tareas.length === 0) {
        console.log('🎉 ¡No tienes tareas pendientes! ¡Buen trabajo!');
        break;
      }
      console.log('⏳ Tareas pendientes:');
      tareas.forEach(t => {
        const fecha = t.fechaCreacion.split('T')[0];
        console.log(`  [${t.id}] ⬜ ${t.descripcion}  (${fecha})`);
      });
      break;
    }

    case 'listCompleted': {
      const tareas = listTareasCompletadas();
      if (tareas.length === 0) {
        console.log('🎉 ¡No tienes tareas completadas! ¡Buen trabajo!');
        break;
      }
      console.log('✅ Tareas completadas:');
      tareas.forEach(t => {
        const fecha = t.fechaCreacion.split('T')[0];
        console.log(`  [${t.id}] ✅ ${t.descripcion}  (${fecha})`);
      });
      break;
    }

    case 'clear': {
      const tareas = clearTareasCompletadas();
      console.log('🗑️  Tareas completadas eliminadas');
      break;
    }

    default:
      console.log('Comando no reconocido. Usa --help para ver las opciones.');
  }

} catch (error) {
  console.error('❌ Error:', error.message);
}
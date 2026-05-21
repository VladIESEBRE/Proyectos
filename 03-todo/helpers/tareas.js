import fs from 'fs';

const RUTA = 'db/data.json';

// función privada para leer

function leerTareas() {
  try {
    const texto = fs.readFileSync(RUTA, 'utf-8');
    return JSON.parse(texto);
  } catch {
    return [];
  }
}

// función privada para guardar
function guardarTareas(tareas) {
  if (!fs.existsSync('db')) {
    fs.mkdirSync('db');
  }
  fs.writeFileSync(RUTA, JSON.stringify(tareas, null, 2));
}

// las exportadas:
export function addTarea(descripcion) {
  // leer, generar id, hacer push, guardar
if (!descripcion || descripcion.trim() === '') {
  throw new Error('La descripción no puede estar vacía');
}
  const tareas = leerTareas();
  const nuevoId = tareas.length === 0 
  ? 1 
  : Math.max(...tareas.map(t => t.id)) + 1;
  const nuevaTarea = {
  id: nuevoId,
  descripcion: descripcion.trim(),
  completada: false,
  fechaCreacion: new Date().toISOString()
    };
 
  tareas.push(nuevaTarea);
  guardarTareas(tareas);
  return nuevaTarea;
  
}

export function listTareas() {
  // leer, recorrer con forEach e imprimir
  return leerTareas();
}

export function completeTarea(id) {
  // leer, find, validar que existe, modificar, guardar
  const tareas = leerTareas();
  const tarea = tareas.find(t => t.id === id);
    if (!tarea) {
  throw new Error(`No existe ninguna tarea con id ${id}`);
    }
tarea.completada = true;
guardarTareas(tareas);
return tarea;
}

export function deleteTarea(id) {
  // leer, filter, validar que sí se borró algo, guardar
  const tareas = leerTareas();
  const tareasFiltradas = tareas.filter(t => t.id !== id);
  if (tareasFiltradas.length === tareas.length) {
  throw new Error(`No existe ninguna tarea con id ${id}`);
}
    guardarTareas(tareasFiltradas);
  return tareasFiltradas;
}

export function listTareasPendientes() {
  const tareas = leerTareas();
  return tareas.filter(t => !t.completada);
}

export function listTareasCompletadas() {
  const tareas = leerTareas();
  return tareas.filter(t => t.completada);
}

export function clearTareasCompletadas() {
  const tareas = leerTareas();
  const tareasPendientes = tareas.filter(t => !t.completada);
  const tareasReindexadas = tareasPendientes.map((tarea, index) => {
    return {
      ...tarea,
      id: index + 1 
    };
  });
  guardarTareas(tareasReindexadas);
  return tareasReindexadas;
}
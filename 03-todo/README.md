# 03 - Gestor de tareas (To-Do)

CLI para gestionar tareas con persistencia en un archivo JSON.

## Uso

```bash
node app.js <comando> [opciones]
```

### Comandos

| Comando | Opciones | Descripción |
|---------|----------|-------------|
| `add` | `--desc` (`-d`) | Añadir una nueva tarea |
| `list` | — | Listar todas las tareas |
| `complete` | `--id` | Marcar una tarea como completada |
| `delete` | `--id` | Eliminar una tarea |
| `clearComplete` | `` | Eliminar tareas completadas y reorganizar IDs desde el [1] |
| `listPending / lp` | `` | Listar solo las tareas pendientes |

### Ejemplos

```bash
node app.js add --desc="Estudiar Express"
node app.js list
node app.js complete --id=1
node app.js delete --id=2
```

## Almacenamiento

Las tareas se guardan en `db/data.json`. Si el archivo no existe, se crea automáticamente al añadir la primera tarea.

## Modelo de datos

```json
{
  "id": 1,
  "descripcion": "Estudiar Express",
  "completada": false,
  "fechaCreacion": "2026-05-20T09:30:15.123Z"
}
```
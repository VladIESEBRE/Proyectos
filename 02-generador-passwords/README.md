# 02 - Generador de contraseñas

CLI para generar contraseñas aleatorias con opciones configurables.

## Uso

```bash
node app.js [opciones]
```

### Opciones

| Flag | Alias | Tipo | Default | Descripción |
|------|-------|------|---------|-------------|
| `--length` | `-l` | número | 12 | Longitud de la contraseña |
| `--uppercase` | `-u` | booleano | false | Incluir mayúsculas |
| `--numbers` | `-n` | booleano | false | Incluir números |
| `--symbols` | `-s` | booleano | false | Incluir símbolos |
| `--save` | — | string | — | Archivo donde guardar |

### Ejemplos

```bash
node app.js -l 20 -u -n -s
node app.js --length=16 --uppercase --save=passwords.txt
```

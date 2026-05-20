# 01 - Conversor de unidades

CLI para convertir entre distintas unidades de longitud y temperatura.

## Instalación

```bash
npm install
```

## Uso

```bash
node app.js --value=<número> --from=<unidad> --to=<unidad>
```

### Unidades soportadas

- **Longitud**: mm, cm, dm, m, dam, hm, km
- **Temperatura**: celsius, fahrenheit, kelvin

### Ejemplos

```bash
node app.js --value=5 --from=km --to=m
# 5 km = 5000 m

node app.js --value=100 --from=celsius --to=fahrenheit
# 100 celsius = 212 fahrenheit
```

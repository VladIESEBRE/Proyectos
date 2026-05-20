export function convertirLongitud(valor, from, to) {
    const factores = {
  mm: 0.001,
  cm: 0.01,
  dm: 0.1,
  m:  1,
  dam: 10,
  hm: 100,
  km: 1000
};

 if (factores[from] === undefined) {
        throw new Error(`Unidad de origen no soportada: ${from}`);
    }
    if (factores[to] === undefined) {
        throw new Error(`Unidad de destino no soportada: ${to}`);
    }


    const enMetros = valor * factores[from];
    const resultado = enMetros / factores[to];

    return resultado;
}

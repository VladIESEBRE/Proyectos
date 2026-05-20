export function convertirTemperatura(valor, from, to) {

  const aCelsius = {
    celsius: (v) => v,
    fahrenheit: (v) => (v - 32) * 5/9,    
    kelvin: (v) => v - 273.15
  };

  if (! aCelsius[from]) {
        throw new Error(`Unidad de origen no soportada: ${from}`);
    }

  const desdeCelsius = {
    celsius: (v) => v,
    fahrenheit: (v) => v * 9/5 + 32,
    kelvin: (v) => v + 273.15
  };

   if (! desdeCelsius[to]) {
        throw new Error(`Unidad de destino no soportada: ${to}`);
    }

  const celsius = aCelsius[from](valor);
  return desdeCelsius[to](celsius);




}

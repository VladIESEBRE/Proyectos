export function generarPassword(length, { uppercase, numbers, symbols }){

  if (!length || length <= 0 ){
    throw new Error("La longitud de la contraseña debe ser un número positivo");
  }else

    let bolsa = "abcdefghijklmnopqrstuvwxyz"
  if (uppercase) bolsa += "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  if (numbers) bolsa += "0123456789"
  if (symbols) bolsa += "!@#$%^&*()_+~`|}{[]:;?><,./-="
  
  if (bolsa.length === 26){
    console.warn("Contraseña débil: solo letras minúsculas")
  }
  
  let password = ""
  for (let i = 0; i < length; i++){
    const indice = Math.floor(Math.random() * bolsa.length);
    password += bolsa[indice]
  }
  return password;
  
}

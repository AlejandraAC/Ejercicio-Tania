const baseEndpoint = 'https://api.github.com'; /* Enruta al URL de la API en github */
const usersEndpoint = `${baseEndpoint}/users`; /* Enruta al URL de la API con los datos de usuario */
const $n = document.querySelector('.name'); /* Selecciona un elemento del html con la clase "name". Le agregamos el punto para referenciar la clase  */
const $b = document.querySelector('.blog'); /* Cambiamos el # por punto para referenciar una clase */
const $l = document.querySelector('.location'); /* Agregamos la clase location en el documento HTML */

async function displayUser(username) { /* Agregamos la palabra async para la función asíncrona */
  /* Agregamos los bloques de try y catch para el manejo de excepciones */
  try{
  $n.textContent = 'cargando...'; 
  const response = await fetch(`${usersEndpoint}/${username}`); /* fetch hace la solicitud HTTP GET para traer lo que hay en usersEndPoint y username, await espera la respuesta */
  const data = await response.json(); /* Convierte el cuerpo de response en formato JSON y lo guarda en data */
  console.log(data); /* imprime data en consola */
  $n.textContent = data.name; /* Quitamos las template literals de las tres variables, para que se muestren los valores y no las cadenas */
  $b.textContent = data.blog;
  $l.textContent = data.location;
  } catch (err){
    handleError(err);
  }
}

function handleError(err) {
  console.log('OH NO!');
  console.error(err); /* le cambiamos console.log a console.error(err) */
  n.textContent = `Algo salió mal: ${err}`
}

displayUser('stolinski') /* Se quitó ".catch(handleError); y se agregó el bloque try y catch en la función asíncrona" */
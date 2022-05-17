const arrayVehiculos = [];
/**
 * aqui accedemos al document.
 * utilizamos el selector 'getElementById' el cual recibe el id del nodo o elemento
 * del document que queremos accesar.
 * y  utilizamos el metodo addEventListener() el cual sirve para escuchar y recibe 2 argumentos
 * 1er argumento es el nombre del evento que pondremos a escuchar
 * 2do argumento es una expresion funcion anonima o tambien puede recibir una funcion arrow
 */
document
  .getElementById("encryptacion-form")
  .addEventListener("submit", function (event) {
    /**
     * (event)  hace referencia al evento que se captura tambien es habitual usar (e)
     * event.preventDefault() se utiliza para evitar que el evento se ejecute por default
     * al cargar la pagina evitando que se envie el formulario vacio.
     */
    event.preventDefault();

    // hacemos el llamado a nuestra funcion registrarVehiculo()
    registrarVehiculo()
  
  });

function registrarVehiculo() {
  /**
   * guardamos en constantes los nodos que contienen los datos que iremos trabajando, en este caso los nodos con los respectivos
   * campos del vehiculo,tendremos un nodo mensajeResultado para modificar su contenido y mostrar un mensaje este nodo esta identificado
   *  con el id='resultado,también guardamos el nodo donde mostraremos un mensaje de error en caso de que el usuario envié el formulario vació.
   */ 

  const nodoMarca = document.getElementById("marca");
  const nodoModelo = document.getElementById("modelo");
  const nodoAnio= document.getElementById("anio");
  const nodoColor= document.getElementById("color");
  const mensajeResultado = document.getElementById("resultado");
  
  let nodoErrorMsn = document.getElementById("errorMsn");

  /**
   * Crearemos unas variables que contengan los valores de los nodos anteriores para posteriormente crear nuestro objeto vehiculo,
   * accedemos a la propiedad (.value) del nodo la cual guarda el valor en texto (string) ingresado por el usuario y lo guaramos
   * en las respectivas variables 
   */

  const marca = nodoMarca.value;
  const modelo  = nodoModelo.value;
  const anio   = nodoAnio.value; 
  const color  = nodoColor.value;



  /**
   * validaremos que los campos no se enmcuentren vacios.
   * en la expresión la expresión (===) se valida si las comparaciones son iguales
   * si se cumple la condición sera suficiente para mostrar el mensaje de error
   */


  let mensaje;

  if (marca === "" || modelo === "" || anio === ""|| color === "")  {
    mensaje = "No se permiten <strong>campos vacios</strong>";

    /**
     * hacemos el llamado a nuestra función showMsnError() que sera la encargada
     * de mostrar el mensaje de error
     * esta recibe como argumentos el mensaje de error que deberá mostrar
     * y el nodo nodoErrorMsn donde se mostrara el mensaje que se enviá
     */

    showMsnError(mensaje, nodoErrorMsn);

  } 

  /**
   * Entonces si no se encuentran errores por campos vaciós se procederá en este bloque else
   * a ejecutar la lógica para crear un objeto vehiculo, guardarlo en un arreglo de vehiculos y
   * posteiormente mostrarlo su información en la vista.
   */

  else {
    
    /**
     * Crearemos nuestro objeto usando la notacion JSON y asignaremos los valores a las propiedades del objeto
     * usando las variables anteriormente creadas, marca, modelo, anio, color.
     */

    const vehiculo = {
      marca: marca,
      modelo: modelo,
      anio: anio,
      color: color
    }

    /**
     * Agregaremos nuestro objeto vehiculo a array de vehiculos usando el metodo push() y enviado como argumento el
     * objeto vehiculo que hemos creado.
     */
    
    arrayVehiculos.push(vehiculo);

    /**
     * Para finalizar la logica de nuestro ejercicio crearemos un mensaje de exito, con los detalles del vehiculo, este mensaje 
     * sera el valor de la propiedad innerHTML de nuestra nodo mensajeResultado, y con esto tendremos en la vista dicho mensaje. 
     */
  
    const mensajeExitoso = `Registro exitoso!<br>Detalle del vehiculo:<br>
                            Marca:  ${marca}<br>
                            modelo: ${modelo}<br>
                            anio:   ${anio}<br>
                            color:  ${color}<br>`
  
    mensajeResultado.innerHTML= mensajeExitoso;

    
    
}

function showMsnError(mensajeError, nodoErrorMsn) {
  /**
   * en nuestro nodoErrorMsn accedemos al metodo .setAttribute()
   * el cual recibe como primer argumento el nombre de la propiead html que desamos modificar
   * para este caso vamos modificar la propiedad 'class' y como segundo argumento
   * enviamos las clases de estilo que seran asignadas a la propiedad 'class' en este caso
   * asignaremos algunas clases de estilos pertenecientes al framework de estilos boostrap
   * bg-danger --> genera un fondo rojo
   * rounded-3 --> redondea las esquinas
   * mb-2 ---> margin-bottom agrega un margen en la parte inferior del nodoErrorMsn
   * p-2 ---> agrega un padding alrededor de todo el nodoErrorMsn
   *
   */

  nodoErrorMsn.setAttribute("class", "bg-danger rounded-3 mb-2 p-2");
  /**
   * modificamos el nodoErrorMsn accediendo a su propiedad .innerHTML
   * la cual nos permite utilizar la sintaxis html para crear etiquetas
   * desde javaScript en este caso crearemos una etiqueta 'strong'
   * para poner en negrita la palabra campos vacios
   */
  nodoErrorMsn.innerHTML = mensajeError;

  /**
   * utilizamos la instruccion de return para romper el flujo de nuestra aplicacion
   * y evitar que se continue ejecutando el codigo que pueda seguir
   */
  return;
}
}
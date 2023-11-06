let cm = null; //Current Module

async function cargarModuloEmpleado()
{
    //AJAX: Asynchrous Java script and XML (fetch hace peticiones)
    let respuesta = await fetch('empleado/empleado.html');
    let contenido = await respuesta.text();
    document.getElementById("divContenedorPrincipal").innerHTML = contenido;

    //Despues de cargar el contenido HTML, cargamos el modulo JS de empleado:
    import('./empleado.js')
        .then(obj => {
            cm = obj;
            cm.inicializar();
        }
    );
}
async function cargarModuloCliente()
{
    //AJAX: Asynchrous Java script and XML
    let respuesta = await fetch('cliente/cliente.html');
    let contenido = await respuesta.text();
    document.getElementById("divContenedorPrincipal").innerHTML = contenido;
    
    //Despues de cargar el contenido HTML, cargamos el modulo JS de empleado:
    import('./cliente.js')
        .then(obj => {
            cm = obj;
            cm.inicializar();
        }
    );
}
async function cargarModuloProducto()
{
    //AJAX: Asynchrous Java script and XML
    let respuesta = await fetch('producto/producto.html');
    let contenido = await respuesta.text();
    document.getElementById("divContenedorPrincipal").innerHTML = contenido;
    
    import( './producto.js')
           .then(obj=> {
               cm=obj;
               cm.inicializar();
        }
    );

}
async function cargarModuloCompra()
{
    //AJAX: Asynchrous Java script and XML
    let respuesta = await fetch('empleado/empleado.html');
    let contenido = await respuesta.text();
    document.getElementById("divContenedorPrincipal").innerHTML = contenido;
}
async function cargarModuloVenta()
{
    //AJAX: Asynchrous Java script and XML
    let respuesta = await fetch('empleado/empleado.html');
    let contenido = await respuesta.text();
    document.getElementById("divContenedorPrincipal").innerHTML = contenido;
}

function cargarLogin()
{
    window.location.replace('../index.html');
}
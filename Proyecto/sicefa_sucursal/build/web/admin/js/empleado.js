let empleados = [];




//Esta funcion nos sirve para inicializar el modulo
//de empleados.
export function inicializar()
{
    //no se usa por que la funcion esta dentro del mismo metodo
    //si se usa cm cuando estas fuera del java o en el html
    
    //fillTableEmpleado();
    refreshTableEmpleado();
    setDetalleEmpleadoVisible();
    cargarSucursales();
    
}

// Insert y Update en el mismo metodo:
export function save()
{
    // Declaramos un objeto donde guardaremos los datos del empleado:
    let emp = null;
    let posicion = -1; // Para saber si un empleado ya existe o no.
    let idEmpleado = 0;
    let idPersona = 0;
    let idUsuario = 0;
    // Revisamos si hay un ID de empleado:
    if (document.getElementById("txtIdEmpleado").value.trim().length > 0)
    {
        idEmpleado = parseInt(document.getElementById("txtIdEmpleado").value.trim());
        idPersona = parseInt(document.getElementById("txtIdPersona").value.trim());
        idUsuario = parseInt(document.getElementById("txtIdUsuario").value.trim());
    }    
    // Si no hay un empleado con el ID descrito,
    // creamos una nueva instancia del Objeto:
    emp = new Object();
    emp.id = idEmpleado;
 
    emp.persona = new Object();
    emp.persona.id = idPersona;
    emp.usuario = new Object();
    emp.usuario.id = idUsuario;
    emp.sucursal = new Object();
    emp.sucursal.id = 0;
    // Si posicion es mayor o igual a 0, si encontramos un empleado:
    if (posicion >= 0)
        emp = empleados[posicion];
    else
    {
 
 
        // Insertamos el objeto emp dentro del arreglo de empleados:
        empleados.push(emp);
    }
    // Continuamos llenando los datos del objeto:
    // Datos de Persona:
    emp.persona.nombre = document.getElementById("txtNombre").value;
    emp.persona.apellidoPaterno = document.getElementById("txtApellidoPaterno").value;
    emp.persona.apellidoMaterno = document.getElementById("txtApellidoMaterno").value;
    emp.persona.genero = document.getElementById("cmbGenero").value;
    emp.persona.fechaNacimiento = document.getElementById("txtFechaNacimiento").value;
    emp.persona.rfc = document.getElementById("txtRfc").value;
    emp.persona.curp = document.getElementById("txtCurp").value;
    emp.persona.domicilio = document.getElementById("txtDomicilio").value;
    emp.persona.cp = document.getElementById("txtCp").value;
    emp.persona.ciudad = document.getElementById("txtCiudad").value;
    emp.persona.estado = document.getElementById("txtEstado").value;
    emp.persona.telefono = document.getElementById("txtTelefono").value;
 
    // Datos del Empleado:
    emp.codigo = document.getElementById("txtCodigoEmpleado").value;
    emp.email = document.getElementById("txtEmail").value;
    emp.fechaContratacion = document.getElementById("txtFechaIngreso").value;
    emp.puesto = document.getElementById("cmbPuesto").value;
    emp.salarioBruto = document.getElementById("txtSalarioBruto").value;    
 
    // Datos de Usuario:
    emp.usuario.nombreUsuario = document.getElementById("txtNombreUsuario").value;
    emp.usuario.contrasenia = document.getElementById("txtContrasenia").value;
    emp.usuario.rol = document.getElementById("cmbRol").value;
 
    // Refrescamos el catalogo de empleados:
    fillTableEmpleado();
 
    Swal.fire('Movimiento Realizado', 'Datos de Empleado Actualizados correctamente.' , 'success');
}


export function getEmpleados()
{
}

export async function refreshTableEmpleado(){
    let url="http://localhost:8090/sicefa_backend/api/empleado/getAll";
    let resp = await fetch(url);
    let datos = await resp.json();
    
    if(datos.error != null){
        Swal.fire("", datos.error, 'warning');
        return;
    }
    if(datos.exception != null){
        Swal.fire('',datos.exception,'danger');
    }
    
    empleados = datos;
    fillTableEmpleado();
}

//Llena la tabla de empleados
//con el arreglo.
function fillTableEmpleado()
{
    //Aqui vamos a ir guardando el contenido del
    //tbody de la tabla de empleados:
    let contenido = '';

    //Recorremos el arreglo elemento por elemento:
    for (let i = 0; i < empleados.length; i++)
    {
        contenido += '<tr>' +
                '<td>' +
                empleados[i].persona.nombre + ' ' +
                empleados[i].persona.apellidoPaterno + ' ' +
                empleados[i].persona.apellidoMaterno +
                '</td>' +
                '<td>' + empleados[i].codigo + '</td>' +
                '<td>' + empleados[i].persona.rfc + '</td>' +
                '<td>' + empleados[i].email + '</td>' +
                '<td>' + empleados[i].persona.telefono + '</td>' +
                '<td>' +
                '<a href="#" class="text-info" onclick="cm.cargarDetalleEmpleado(' + i + ');"><i class="fa-brands fa-wpforms"></i></a>' +
                '</td>' +
                '</tr>';
    }

    document.getElementById("tbodyEmpleados").innerHTML = contenido;
}

export function cargarDetalleEmpleado(posicion)
{
    //Recuperamos el Empleado en la posicion indicada:
    let emp = empleados[posicion];

    // LLenamos las cajas de texto y demas controles con los datos del
    // empleado que recuperamos previamente:
    document.getElementById("txtIdEmpleado").value = emp.id;


    // Datos de Persona:
    document.getElementById("txtNombre").value = emp.persona.nombre;
    document.getElementById("txtApellidoPaterno").value = emp.persona.apellidoPaterno;
    document.getElementById("txtApellidoMaterno").value = emp.persona.apellidoMaterno;
    document.getElementById("cmbGenero").value = emp.persona.genero;
    document.getElementById("txtFechaNacimiento").value = emp.persona.fechaNacimiento;
    document.getElementById("txtRfc").value = emp.persona.rfc;
    document.getElementById("txtCurp").value = emp.persona.curp;
    document.getElementById("txtDomicilio").value = emp.persona.domicilio;
    document.getElementById("txtCp").value = emp.persona.cp;
    document.getElementById("txtCiudad").value = emp.persona.ciudad;
    document.getElementById("txtEstado").value = emp.persona.estado;
    document.getElementById("txtTelefono").value = emp.persona.telefono;

    // Datos del Empleado:
    document.getElementById("txtCodigoEmpleado").value = emp.clave;
    document.getElementById("txtEstatus").value = emp.estatus;
    document.getElementById("txtEmail").value = emp.email;
    document.getElementById("txtFechaIngreso").value = emp.fechaContratacion;
    document.getElementById("cmbPuesto").value = emp.puesto;
    document.getElementById("txtSalarioBruto").value = emp.salarioBruto;

    // Datos de Usuario:
    document.getElementById("txtNombreUsuario").value = emp.usuario.nombreUsuario;
    document.getElementById("txtContrasenia").value = emp.usuario.contrasenia;
    document.getElementById("cmbRol").value = emp.usuario.rol;

    document.getElementById("txtIdPersona").value = emp.persona.id;
    document.getElementById("txtIdUsuario").value = emp.usuario.id;
    
    setDetalleEmpleadoVisible(true);
}

export function clearForm()
{
    document.getElementById("txtIdEmpleado").value = '';


    // Datos de Persona:
    document.getElementById("txtNombre").value = '';
    document.getElementById("txtApellidoPaterno").value = '';
    document.getElementById("txtApellidoMaterno").value = '';
    document.getElementById("cmbGenero").value = '';
    document.getElementById("txtFechaNacimiento").value = '';
    document.getElementById("txtRfc").value = '';
    document.getElementById("txtCurp").value = '';
    document.getElementById("txtDomicilio").value = '';
    document.getElementById("txtCp").value = '';
    document.getElementById("txtCiudad").value = '';
    document.getElementById("txtEstado").value = '';
    document.getElementById("txtTelefono").value = '';

    // Datos del Empleado:
    document.getElementById("txtCodigoEmpleado").value = '';
    document.getElementById("txtEmail").value = '';
    document.getElementById("txtFechaIngreso").value = '';
    document.getElementById("cmbPuesto").value = '';
    document.getElementById("txtSalarioBruto").value = '';

    // Datos de Usuario:
    document.getElementById("txtNombreUsuario").value = '';
    document.getElementById("txtContrasenia").value = '';
    document.getElementById("cmbRol").value = '';

    document.getElementById("txtIdPersona").value = '';
    document.getElementById("txtIdUsuario").value = '';
}

// Busca la posicion de un objeto empleado
// con base en la propiedad ID y la devuelve.
// Si no se encuentra el ID buscado,
// el metodo devuelve -1.
function buscarPosicionEmpleadoPorId(id)
{
    for (let i = 0;
    i < empleados.length; i++)
    {
        if (empleados[i].id === id)
            return i;
    }
    return -1;
}

//Booleano valor
export function setDetalleEmpleadoVisible(valor)
{
    if(valor === true)
    {
        //Ocultamos la sección del catálogo de empleados
        document.getElementById("divCatalogoEmpleados").style.display = "none";
        
        //Mostramos la sección de detalle
        document.getElementById("divDetalleEmpleado").style.display = "";
    }
    else
    {
        //Ocultamos la sección del detalle de empleados
        document.getElementById("divDetalleEmpleado").style.display = "none";
        
        //Mostramos la sección del catalogo
        document.getElementById("divCatalogoEmpleados").style.display = "";
    }
}
export function clearAndShowDetalleEmpleado(){
    clearForm();
    setDetalleEmpleadoVisible(true);
}

export async function cargarSucursales()
{
    let url = "http://localhost:8086/sicefa_backend/api/sucursal/getAll";
    let resp = await fetch(url);
    let datos = await resp.json();
    let contenido = '';
    if (datos.error != null)
    {
        Swal.fire('', datos.error, 'warning');
        return;
    }
    if (datos.exception != null)
    {
        Swal.fire('', datos.exception, 'danger');
        return;
    }
    //LLenamos las opciones del combo box con el ID y Nombre de la Sucursal:
    for (let i = 0; i < datos.length; i++)
        contenido +=  '<option value="' + datos[i].id + '">' + datos[i].nombre + '</option>';
    document.getElementById("cmbSucursal").innerHTML = contenido;
}
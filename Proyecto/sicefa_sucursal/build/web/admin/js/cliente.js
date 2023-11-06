let clientes = [
    {
        "id": 1,
        "fechaRegistro": "15/07/2021",
        "correo": "julian@gmail.com",
        "estatus": 1,
        "persona": {
            "id": 6,
            "nombre": "Julian",
            "apellidoPaterno": "Quiñones",
            "apellidoMaterno": "Quiñones",
            "genero": "H",
            "fechaNacimiento": "24/03/1997",
            "rfc": "GIRM801109HA2",
            "curp": "GIRM8011SDSFTLSGAJAW",
            "foto": "",
            "domicilio": "Boulevard San Juan Bosco, No.333",
            "cp": "37321",
            "ciudad": "Leon",
            "estado": "Guanajuato",
            "telefono": "4775192354"
        }
    },
    {
        "id": 2,
        "fechaRegistro": "15/05/2019",
        "correo": "henrylabombamartin@gmail.com",
        "estatus": 1,
        "persona": {
            "id": 7,
            "nombre": "Henry",
            "apellidoPaterno": "Josue",
            "apellidoMaterno": "Martin",
            "genero": "H",
            "fechaNacimiento": "25/06/1988",
            "rfc": "KAKA801109H25",
            "curp": "LDAÑA801109HDLLD",
            "foto": "",
            "domicilio": "Calle Parque Portugal, No.123",
            "cp": "37231",
            "ciudad": "Leon",
            "estado": "Guanajuato",
            "telefono": "4775691824"
        }
    },
    {
        "id": 3,
        "fechaRegistro": "28/02/2017",
        "correo": "culpaLayun@gmail.com",
        "estatus": 1,
        "persona": {
            "id": 8,
            "nombre": "Miguel",
            "apellidoPaterno": "Layun",
            "apellidoMaterno": "Prado",
            "genero": "H",
            "fechaNacimiento": "18/11/1992",
            "rfc": "KAKAK801109H25",
            "curp": "IAIA019|9HGTLSGAJAW",
            "foto": "",
            "domicilio": "Boulevard Antonio Martínez Aguayo, No.225",
            "cp": "37432",
            "ciudad": "Leon",
            "estado": "Guanajuato",
            "telefono": "4775622354"
        }
    },
    {
        "id": 4,
        "fechaRegistro": "12/09/2020",
        "correo": "fidalgod@gmail.com",
        "estatus": 1,
        "persona": {
            "id": 9,
            "nombre": "Alvaro",
            "apellidoPaterno": "Fidalgo",
            "apellidoMaterno": "Hernandez",
            "genero": "H",
            "fechaNacimiento": "09/04/1997",
            "rfc": "JANA801109H25",
            "curp": "KFKF835HSGHLSGAJAW",
            "foto": "",
            "domicilio": "Calle Maya, No.233",
            "cp": "37232",
            "ciudad": "Leon",
            "estado": "Guanajuato",
            "telefono": "47756222154"
        }
    },
    {
        "id": 5,
        "fechaRegistro": "05/02/2022",
        "correo": "valdezinho@gmail.com",
        "estatus": 1,
        "persona": {
            "id": 10,
            "nombre": "Diego",
            "apellidoPaterno": "Valdez",
            "apellidoMaterno": "Contreras",
            "genero": "M",
            "fechaNacimiento": "30/01/1994",
            "rfc": "KCALA08909H25",
            "curp": "SKLALSL9292KTLSGAJAW",
            "foto": "",
            "domicilio": "Calle Juan Balderas, No.225",
            "cp": "37948",
            "ciudad": "Leon",
            "estado": "Guanajuato",
            "telefono": "4775234354"
        }
    }
];

//Esta funcion nos sirve para inicializar el modulo
//de clientes
export function inicializar()
{
    fillTableCliente();
    setDetalleClienteVisible();
}
// Insert y Update en el mismo metodo:
export function save()
{
    // Declaramos un objeto donde guardaremos los datos del cliente:
    let cli = null;
    let posicion = -1; // Para saber si un cliente ya existe o no.
    let idCliente = 0;

    // Revisamos si hay un ID de cliente:
    if (document.getElementById("txtIdCliente").value.trim().length > 0)
    {
        idCliente = parseInt(document.getElementById("txtIdCliente").value.trim());
        posicion = buscarPosicionClientePorId(idCliente);

        // Si posicion es mayor o igual a 0, si encontramos un cliente
        if (posicion >= 0)
            cli = clientes[posicion];
        else
        {
            // Si no hay un cliente con el ID descrito,
            // creamos una nueva instancia del Objeto:
            cli = new Object();
            cli.id = idCliente;

            cli.persona = new Object();
            cli.persona.id = parseInt(document.getElementById("txtIdPersona").value.trim());

            // Insertamos el objeto cli dentro del arreglo de clientes:
            clientes.push(cli);
        }
        // Continuamos llenando los datos del objeto:
        //Datos Persona
        cli.persona.nombre = document.getElementById("txtNombre").value;
        cli.persona.apellidoPaterno = document.getElementById("txtApellidoPaterno").value;
        cli.persona.apellidoMaterno = document.getElementById("txtApellidoMaterno").value;
        cli.persona.genero = document.getElementById("cmbGenero").value;
        cli.persona.fechaNacimiento = document.getElementById("txtFechaNacimiento").value;
        cli.persona.rfc = document.getElementById("txtRfc").value;
        cli.persona.curp = document.getElementById("txtCurp").value;
        cli.persona.domicilio = document.getElementById("txtDomicilio").value;
        cli.persona.cp = document.getElementById("txtCp").value;
        cli.persona.ciudad = document.getElementById("txtCiudad").value;
        cli.persona.estado = document.getElementById("txtEstado").value;
        cli.persona.telefono = document.getElementById("txtTelefono").value;

        //Datos cliente
        cli.fechaRegistro = document.getElementById("txtFechaRegistro").value;
        cli.correo = document.getElementById("txtEmail").value;
        cli.estatus = document.getElementById("txtEstatus").value;
        
        // Refrescamos el catalogo de clientes:
        fillTableCliente();
        
        Swal.fire('Movimiento Realizado', 'Datos de Cliente Actualizados correctamente.' , 'success');
    }
    else
    {
        Swal.fire('Verificaci&oacute;n de datos requerida.',
                  'Debe agregar un ID al cliente (valor num&eacute;rico).',
                  'warning');
    }
}

export function deleteCliente()
{
    let posicion = -1;
    let idCliente = 0;
    
    // Revisamos si hay un ID de cliente:
    if (document.getElementById("txtIdCliente").value.trim().length > 0)
    {
        // Recuperamos el ID del Cliente que deseamos eliminar:
        idCliente = parseInt(document.getElementById("txtIdCliente").value.trim());
        
        // Buscamos la posicion del empleado con ese ID:
        posicion = buscarPosicionClientePorId(idCliente);
        
        // Si la posicion del Cliente existe, lo quitamos del arreglo:
        if (posicion >= 0)
        {
            clientes.splice(posicion, 1);
            Swal.fire('Movimiento realizado.', 'Registro de cliente Eliminado.', 'success');
            fillTableCliente();
        }
        else
        {
            Swal.fire('', 'El ID de cliente especificado no existe.', 'warning');
        }
    }
    else
    {
        Swal.fire('', 'Especifique un ID de cliente.', 'warning');
    }
}


export function getClientes()
{

}


//Llena la tabla de clientes
//con el arreglo
function fillTableCliente()
{
    //Aqui vamos a ir guardando el contenido
    //tbody de la tabla de cliente
    let contenido = '';

    for (let i = 0; i < clientes.length; i++) {
        contenido += '<tr>' +
                '<td>' +
                clientes[i].persona.nombre + ' ' +
                clientes[i].persona.apellidoPaterno + ' ' +
                clientes[i].persona.apellidoMaterno +
                '</td>' +
                '<td>' + clientes[i].id + '</td>' +
                '<td>' + clientes[i].persona.rfc + '</td>' +
                '<td>' + clientes[i].correo + '</td>' +
                '<td>' + clientes[i].persona.telefono + '</td>' +
                '<td>' +
                '<a href="#" class="text-info" onclick="cm.cargarDetalleCliente(' + i + ');"><i class="fa-brands fa-wpforms"></i></a>' +
                '</td>' +
                '</tr>';
    }

    document.getElementById("tbodyClientes").innerHTML = contenido;
}

export function cargarDetalleCliente(posicion)
{
    let cli = clientes[posicion];

    //Llenamos las cajas de texto y demas controles con los datos del 
    // cliente que recuperamos previamente

    //ID
    document.getElementById("txtIdCliente").value = cli.id;
    document.getElementById("txtIdPersona").value = cli.persona.id;

    //Datos Persona
    document.getElementById("txtNombre").value = cli.persona.nombre;
    document.getElementById("txtApellidoPaterno").value = cli.persona.apellidoPaterno;
    document.getElementById("txtApellidoMaterno").value = cli.persona.apellidoMaterno;
    document.getElementById("cmbGenero").value = cli.persona.genero;
    document.getElementById("txtFechaNacimiento").value = cli.persona.fechaNacimiento;
    document.getElementById("txtRfc").value = cli.persona.rfc;
    document.getElementById("txtCurp").value = cli.persona.curp;
    document.getElementById("txtDomicilio").value = cli.persona.domicilio;
    document.getElementById("txtCp").value = cli.persona.cp;
    document.getElementById("txtCiudad").value = cli.persona.ciudad;
    document.getElementById("txtEstado").value = cli.persona.estado;
    document.getElementById("txtTelefono").value = cli.persona.telefono;

    //Datos cliente
    document.getElementById("txtFechaRegistro").value = cli.fechaRegistro;
    document.getElementById("txtEmail").value = cli.correo;
    document.getElementById("txtEstatus").value = cli.estatus;
    
    setDetalleClienteVisible(true);

}

export function clearForm()
{
    //ID
    document.getElementById("txtIdCliente").value = '';
    document.getElementById("txtIdPersona").value = '';

    //Datos Persona
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

    //Datos cliente
    document.getElementById("txtFechaRegistro").value = '';
    document.getElementById("txtEmail").value = '';
    document.getElementById("txtEstatus").value = '';
}

// Busca la posicion de un objeto cliente
// con base en la propiedad ID y la devuelve.
// Si no se encuentra el ID buscado,
// el metodo devuelve -1.
function buscarPosicionClientePorId(id)
{
    for (let i = 0;
    i < clientes.length; i++)
    {
        if (clientes[i].id === id)
            return i;
    }
    return -1;
}

export function setDetalleClienteVisible(valor)
{
    if(valor === true)
    {
        //Ocultamos la sección del catálogo de cliente
        document.getElementById("divCatalogoClientes").style.display = "none";
        
        //Mostramos la sección de detalle
        document.getElementById("divDetalleCliente").style.display = "";
    }
    else
    {
        //Ocultamos la sección del detalle de cliente
        document.getElementById("divDetalleCliente").style.display = "none";
        
        //Mostramos la sección del catalogo
        document.getElementById("divCatalogoClientes").style.display = "";
    }
}

export function clearAndShowDetalleCliente(){
    clearForm();
    setDetalleClienteVisible(true);
}
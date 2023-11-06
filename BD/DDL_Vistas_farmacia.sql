USE sicefa;

DROP VIEW IF EXISTS v_empleado;
CREATE VIEW v_empleado AS
    SELECT  
            E.idEmpleado,
            E.email,
            E.codigo,
            DATE_FORMAT(E.fechaIngreso, '%Y-%m-%d') AS fechaIngreso,
            E.puesto,
            E.salarioBruto,
            E.activo,
            P.*,
            U.*,
            S.idSucursal,
            S.nombre AS nombreSucursal,
            S.titular,
            S.rfc AS rfc_sucursal,
            S.domicilio AS domicilio_sucursal,
            S.colonia AS colonia_sucursal,
            S.codigoPostal AS cp_sucursal,
            S.ciudad AS ciudad_sucursal,
            S.estado AS estado_sucursal,
            S.telefono AS telefono_sucursal,
            S.latitud,
            S.longitud,
            S.estatus AS estatus_sucursal
    FROM    empleado E
            INNER JOIN  persona  P ON P.idPersona = E.idPersona 
            INNER JOIN  usuario  U ON U.idUsuario = E.idUsuario
            INNER JOIN  sucursal S ON S.idSucursal = E.idSucursal;
            
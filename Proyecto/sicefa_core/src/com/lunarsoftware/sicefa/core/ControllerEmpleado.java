package com.lunarsoftware.sicefa.core;

import com.lunarsoftware.sicefa.model.Empleado;
import java.util.List;
import com.lunarsoftware.sicefa.db.ConexionMySQL;
import com.lunarsoftware.sicefa.model.Persona;
import com.lunarsoftware.sicefa.model.Sucursal;
import com.lunarsoftware.sicefa.model.Usuario;
import java.sql.Connection;
import java.sql.CallableStatement;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.Types;
import java.util.ArrayList;



/**
 *
 * @author rayre
 */
public class ControllerEmpleado {

   public int insert(Empleado e) throws Exception
    {
        // 1. Definimos la consulta SQL que deseamos ejecutar:
        String sql = """
                     call insertarEmpleado(?, ?, ?, ?, ?, ?, ?,
                                           ?, ?, ?, ?, ?, ?,
                                           ?,
                                           ?,
                                           ?, ?, ?,
                                           ?, ?, ?, ?)
                     """;
        
        // 2. Abrimos una conexion con la BD:
        ConexionMySQL connMySQL = new ConexionMySQL();
        Connection conn = connMySQL.open();
        
        // 3. Generamos un objeto de tipo CallableStatement:
        CallableStatement cstmt = conn.prepareCall(sql);
        
        // 4.   Declaramos variables auxiliares donde guardaremos los ID que se
        //      van a generar:
        int idPersonaGenerado = 0;
        int idUsuarioGenerado = 0;        
        int idEmpleadoGenerado = 0;
        String numeroUnicoGenerado = "";
        
        // 5. Declaramos un ResultSet:
        ResultSet rs = null;
        
        // 6.   Llenamos el CallableStatement con los valores que se enviaran al
        //      Stored Procedure:
        cstmt.setString(1, e.getPersona().getNombre());
        cstmt.setString(2, e.getPersona().getApellidoPaterno());
        cstmt.setString(3, e.getPersona().getApellidoMaterno());
        cstmt.setString(4, e.getPersona().getGenero());
        cstmt.setString(5, e.getPersona().getFechaNacimiento());
        cstmt.setString(6, e.getPersona().getRfc());
        cstmt.setString(7, e.getPersona().getCurp());
        cstmt.setString(8, e.getPersona().getDomicilio());
        cstmt.setString(9, e.getPersona().getCodigoPostal());
        cstmt.setString(10, e.getPersona().getCiudad());
        cstmt.setString(11, e.getPersona().getEstado());
        cstmt.setString(12, e.getPersona().getTelefono());
        cstmt.setString(13, e.getPersona().getFoto());
        
        cstmt.setInt(14, e.getSucursal().getId());

        cstmt.setString(15, e.getUsuario().getRol());

        cstmt.setString(16, e.getEmail());
        cstmt.setString(17, e.getPuesto());
        cstmt.setDouble(18, e.getSalarioBruto());

        //Registramos los parametros de salida: 

        cstmt.registerOutParameter(19, Types.INTEGER);
        cstmt.registerOutParameter(20, Types.INTEGER);
        cstmt.registerOutParameter(21, Types.INTEGER);
        cstmt.registerOutParameter(22, Types.VARCHAR);

        // 7. Ejecutamos el Stored Procedure:
        cstmt.executeUpdate();

        // Recuperamos los valores de retorno:

        idPersonaGenerado = cstmt.getInt(19);
        idUsuarioGenerado = cstmt.getInt(20);
        idEmpleadoGenerado = cstmt.getInt(21);
        numeroUnicoGenerado = cstmt.getString(22);

        // Colocamos los valores retornados dentro del objeto Empleado:
        e.setId(idEmpleadoGenerado);
        e.setCodigo(numeroUnicoGenerado);
        e.getPersona().setId(idPersonaGenerado);
        e.getUsuario().setId(idUsuarioGenerado);

        // Cerramos todos nuestros objectos de BD:
        cstmt.close();
        conn.close();
          
        return idEmpleadoGenerado;
    }

   //Este metodo es de tarea 
        
        public void update(Empleado e) throws Exception{
         //bloque de cadena
        //1-Definimos la consulta mysql que deseamos consultar
        String sql = """
                     call modificarEmpleado(?,?,?,?,?,?,?
                                          ,?,?,?,?,?,?,
                                          ?
                                          ,?
                                          ,?,?,?,
                                          ?,?,?,?)
                     """;
        //2-Abrimos la conexion con la base de datos
         ConexionMySQL connMySQL = new ConexionMySQL();
         Connection conn = connMySQL.open();
        
        //3.Generamos un objetos de tipo callableStatment
        //Te ayuda a invocar procedimientos almacenados en base de datos
        CallableStatement cstmt = conn.prepareCall(sql);
        
        //4. Declaramos variables auxiliares donde guardamos los id que se generan
        int idPersonaGenerado = 0;
        int idUsuarioGenerado = 0;
        int idEmpleadoGenerado = 0;
        String numeroUnicoGenerado = "";
        
        //5. Declaramos un resulset:
        ResultSet rs = null;
        
        //6. Llenamos el callablesstatement con los valores que se enviaran al
        //stored procedure
        cstmt.setString(1, e.getPersona().getNombre());
        cstmt.setString(2, e.getPersona().getApellidoPaterno());
        cstmt.setString(3, e.getPersona().getApellidoMaterno());
        cstmt.setString(4, e.getPersona().getGenero());
        cstmt.setString(5, e.getPersona().getFechaNacimiento());
        cstmt.setString(6, e.getPersona().getRfc());
        cstmt.setString(7, e.getPersona().getCurp());
        cstmt.setString(8, e.getPersona().getDomicilio());
        cstmt.setString(9, e.getPersona().getCodigoPostal());
        cstmt.setString(10, e.getPersona().getCiudad());
        cstmt.setString(11, e.getPersona().getEstado());
        cstmt.setString(12, e.getPersona().getTelefono());
        
        cstmt.setInt(14, e.getSucursal().getId());
        
        cstmt.setString(15, e.getUsuario().getRol());
        
        cstmt.setString(16, e.getEmail());
        cstmt.setString(16, e.getPuesto());
        cstmt.setDouble(18, e.getSalarioBruto());
        
        cstmt.setInt(19, e.getPersona().getId());
        cstmt.setInt(20, e.getUsuario().getId());
        cstmt.setInt(21, e.getId());
        cstmt.setString(22, e.getCodigo());
        
        
        //Ejecutamos el Stored Procedure:
        cstmt.executeUpdate();
        
        //Recuperamos los valores de retorno:
        idPersonaGenerado = cstmt.getInt(19);
        idUsuarioGenerado = cstmt.getInt(20);
        idEmpleadoGenerado = cstmt.getInt(21);
        numeroUnicoGenerado = cstmt.getString(22);
        
        //Colocamos los valores retornado dentro del objeto de tipo empleado:
        e.setId(idEmpleadoGenerado);
        e.setCodigo(numeroUnicoGenerado);
        e.getPersona().setId(idPersonaGenerado);
        e.getUsuario().setId(idUsuarioGenerado);
        
        //Cerramos todos nuestros objetos de BD
        cstmt.close();
        conn.close();
    }
    

    public void delete(int id) throws Exception {
            
        String sql = "UPDATE empleado SET activo = 0 WHERE idEmpleado=?";
        ConexionMySQL connMySQL = new ConexionMySQL();
        Connection conn = connMySQL.open();
        PreparedStatement pstmt = conn.prepareStatement(sql);
        
        pstmt.setInt(1,id);
        pstmt.executeUpdate();
        
        pstmt.close();
        conn.close();
        
        
        
            
    }

    public Empleado findById(int id) throws Exception {
        return null;
    }

    public List<Empleado> getAll(String filtro) throws Exception {
        String sql = "SELECT * FROM V_empleado";
        ConexionMySQL connMySQL = new ConexionMySQL();
        Connection conn = connMySQL.open();
        PreparedStatement pstmt = conn.prepareStatement(sql);
        ResultSet rs = pstmt.executeQuery();
        ArrayList<Empleado> empleados = new ArrayList<>();
        
        while(rs.next()){
            Empleado emp = fill(rs);
            empleados.add(emp);
        }
        
        rs.close();
        pstmt.close();
        conn.close();
        
        
        return empleados;
    }
        
    private Empleado fill(ResultSet rs) throws Exception{
        
      Empleado e = new Empleado();
        Persona p = new Persona();
        Usuario u = new Usuario();
        Sucursal s = new Sucursal();
       
        e.setId(rs.getInt("idEmpleado"));
        e.setEmail(rs.getString("email"));
        e.setCodigo(rs.getString("codigo"));
        e.setFechaIngreso(rs.getString("fechaIngreso"));
        e.setPuesto(rs.getString("puesto"));
        e.setSalarioBruto(rs.getDouble("salarioBruto"));
        e.setActivo(rs.getInt("activo"));
       
        p.setId(rs.getInt("idPersona"));
        p.setNombre(rs.getString("nombre"));
        p.setApellidoPaterno(rs.getString("apellidoPaterno"));
        p.setApellidoMaterno(rs.getString("apellidoMaterno"));
        p.setGenero(rs.getString("genero"));
        p.setFechaNacimiento(rs.getString("fechaNacimiento"));
        p.setRfc(rs.getString("rfc"));
        p.setCurp(rs.getString("curp"));
        p.setDomicilio(rs.getString("domicilio"));
        p.setCodigoPostal(rs.getString("codigoPostal"));
        p.setCiudad(rs.getString("ciudad"));
        p.setEstado(rs.getString("estado"));
        p.setTelefono(rs.getString("telefono"));
        p.setFoto(rs.getString("foto"));
        
        u.setId(rs.getInt("idUsuario"));
        u.setNombreUsuario(rs.getString("nombreUsuario"));
        u.setContrasenia(rs.getString("contrasenia"));
        u.setRol(rs.getString("rol"));
       
        s.setId(rs.getInt("idSucursal"));
        s.setNombre(rs.getString("nombreSucursal"));
        s.setTitular(rs.getString("titular"));
        s.setRfc(rs.getString("rfc_sucursal"));
        s.setDomicilio(rs.getString("domicilio_sucursal"));
        s.setColonia(rs.getString("colonia_sucursal"));
        s.setEstado(rs.getString("estado_sucursal"));
        s.setTelefono(rs.getString("telefono_sucursal"));
        s.setLatitud(rs.getString("latitud"));
        s.setLongitud(rs.getString("longitud"));
        s.setEstatus(rs.getInt("estatus_sucursal"));
       
        e.setPersona(p);
        e.setUsuario(u);
        e.setSucursal(s);
       
        return e;
        
    }    

}

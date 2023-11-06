
package com.lunarsoftware.sicefa.core;

import com.lunarsoftware.sicefa.model.Persona;
import com.lunarsoftware.sicefa.model.Empleado;
import com.lunarsoftware.sicefa.model.Usuario;

import com.lunarsoftware.sicefa.db.ConexionMySQL;
import com.lunarsoftware.sicefa.model.Sucursal;
import java.util.List;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.Types;
import java.sql.CallableStatement;
import java.util.ArrayList;
/**
 *
 * @author rayre
 */
public class ControllerSucursal {
    
    public List<Sucursal> getAll(String filtro) throws Exception{
        String sql = "SELECT * FROM v_sucursal";
        ConexionMySQL connMySQL = new ConexionMySQL();
        Connection conn = connMySQL.open();
        PreparedStatement pstmt = conn.prepareStatement(sql);
        ResultSet rs = pstmt.executeQuery();
        //import java.util.List
        ArrayList<Sucursal> sucursales = new ArrayList<>();
        
        while(rs.next()){
            Sucursal suc = fill(rs);
            sucursales.add(suc);
        }
        
        rs.close();
        pstmt.close();
        conn.close();
        
        return sucursales;
    }
    
    private Sucursal fill(ResultSet rs) throws Exception{
        Sucursal s = new Sucursal();
        
        s.setId(rs.getInt("idSucursal"));
        s.setNombre(rs.getString("nombreSucursal"));
        s.setTitular(rs.getString("titular"));
        s.setRfc(rs.getString("rfc_Sucursal"));
        s.setDomicilio(rs.getString("domicilio_sucursal"));
        s.setColonia(rs.getString("colonia_sucursal"));
        s.setEstado(rs.getString("estado_sucursal"));
        s.setTelefono(rs.getString("telefono_sucursal"));
        s.setLatitud(rs.getString("latitud"));
        s.setLongitud(rs.getString("longitud"));
        s.setEstatus(rs.getInt("estatus_sucursal"));
        s.setCiudad(rs.getString("ciudad_sucursal"));
        s.setCodigoPostal(rs.getString("cp_sucursal"));
        
        return s;
    }
}

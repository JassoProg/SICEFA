//Miguel Ernesto Jasso Flores 22002329 DSM405
package com.lunarsoftware.sicefa.db;

import java.sql.Connection;
import java.sql.DriverManager;

public class ConexionMySQL {
    
    public Connection open() throws Exception{
        
        String user = "root";
        String password = "cclab";
        String url = "jdbc:mysql://127.0.0.1:3306/sicefa?"+
                "useSSL=false&" +
                "allowPublicKeyRetrieval=true&" +
                "useUnicode=true&" +
                "characterEncoding=utf-8";
        Connection conn = null;
        
        
        
        // Primero registramos el Driver JDBC de MySQL:
        Class.forName("com.mysql.cj.jdbc.Driver");
        
        // Abrimos una conexion con MySQL:
        conn = DriverManager.getConnection(url, user, password);
        
        
        return conn; 
        
    }
    
}

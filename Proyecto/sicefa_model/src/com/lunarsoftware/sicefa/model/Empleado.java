package com.lunarsoftware.sicefa.model;

/**
 *
 * @author rayre
 */
public class Empleado {
    
    int id;
    String codigo;
    String fechaIngreso;
    String puesto;
    String Email;
    double salarioBruto;
    int activo;
    Persona persona;
    Usuario usuario;
    Sucursal sucursal;

    public String getEmail() {
        return Email;
    }

    public void setEmail(String Email) {
        this.Email = Email;
    }
    
    

    public Sucursal getSucursal() {
        return sucursal;
    }

    public void setSucursal(Sucursal sucursal) {
        this.sucursal = sucursal;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }
    
        public String getCodigo() {
        return codigo;
    }

    public void setCodigo(String codigo) {
        this.codigo = codigo;
    }
    
        public String getFechaIngreso() {
        return fechaIngreso;
    }

    public void setFechaIngreso(String fechaIngreso) {
        this.fechaIngreso= fechaIngreso;
    }
    
        public String getPuesto() {
        return puesto;
    }

    public void setPuesto(String puesto) {
        this.puesto= puesto;
    }
    
        public double getSalarioBruto() {
        return salarioBruto;
    }

    public void setSalarioBruto(double salarioBruto) {
        this.salarioBruto= salarioBruto;
    }
    
        public int getActivo() {
        return activo;
    }

    public void setActivo(int activo) {
        this.activo= activo;
    }
    
        public Persona getPersona() {
        return persona;
    }

    public void setPersona(Persona persona) {
        this.persona= persona;
    }
    
        public Usuario getUsuario() {
        return usuario;
    }

    public void setUsuario(Usuario usuario) {
        this.usuario= usuario;
    }

    

}

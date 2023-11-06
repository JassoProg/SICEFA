package com.lunarsoftware.sicefa.rest;

import com.google.gson.Gson;
import com.google.gson.JsonObject;
import com.lunarsoftware.sicefa.core.ControllerSucursal;
import com.lunarsoftware.sicefa.model.Sucursal;
import jakarta.ws.rs.GET;
import jakarta.ws.rs.Path;
import jakarta.ws.rs.Produces;
import jakarta.ws.rs.core.MediaType;
import jakarta.ws.rs.core.Response;
import java.util.List;
import javafx.scene.media.Media;

@Path("sucursal")
public class RESTSucursal {

    @Path("getAll")
    @GET
    @Produces(MediaType.APPLICATION_JSON)
    public Response getAll() {
        ControllerSucursal cs = new ControllerSucursal();
        List<Sucursal> sucursales = null;
        
        //String out = null;
        //Gson gson = new Gson();
        
        JsonObject jsonResponse = new JsonObject();
        Gson gson = new Gson();
        
        try {
            sucursales = cs.getAll("");
     
            jsonResponse.add("data", gson.toJsonTree(sucursales));
        } catch (Exception s) {
            s.printStackTrace();
           
            jsonResponse.addProperty("exception", s.toString());
        }
        //return Response.ok(out).build();
        return Response.ok(jsonResponse.toString()).build();
    }
}
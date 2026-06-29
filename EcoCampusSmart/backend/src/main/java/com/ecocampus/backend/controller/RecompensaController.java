package com.ecocampus.backend.controller;


import com.ecocampus.backend.entity.Recompensa;
import com.ecocampus.backend.service.RecompensaService;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
@RequestMapping("/api/recompensas")
@CrossOrigin("*")
public class RecompensaController {


    private final RecompensaService service;


    public RecompensaController(RecompensaService service){
        this.service = service;
    }



    @GetMapping
    public List<Recompensa> listar(){
        return service.listar();
    }



    @PostMapping
    public Recompensa guardar(
            @RequestBody Recompensa recompensa){

        return service.guardar(recompensa);
    }



    @PutMapping("/{id}")
    public Recompensa actualizar(
            @PathVariable Integer id,
            @RequestBody Recompensa recompensa){

        return service.actualizar(id,recompensa);
    }



    @DeleteMapping("/{id}")
    public void eliminar(
            @PathVariable Integer id){

        service.eliminar(id);
    }

}
package com.ecocampus.backend.controller;


import com.ecocampus.backend.entity.RegistroReciclaje;
import com.ecocampus.backend.service.RegistroReciclajeService;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
@RequestMapping("/api/reciclajes")
@CrossOrigin("*")
public class RegistroReciclajeController {


    private final RegistroReciclajeService service;


    public RegistroReciclajeController(RegistroReciclajeService service){
        this.service = service;
    }


    @GetMapping
    public List<RegistroReciclaje> listar(){
        return service.listar();
    }


    @PostMapping
    public RegistroReciclaje guardar(
            @RequestBody RegistroReciclaje registro){

        return service.guardar(registro);
    }


    @DeleteMapping("/{id}")
    public void eliminar(@PathVariable Integer id){
        service.eliminar(id);
    }

}
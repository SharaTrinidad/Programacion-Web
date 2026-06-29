package com.ecocampus.backend.controller;


import com.ecocampus.backend.entity.Canje;
import com.ecocampus.backend.service.CanjeService;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
@RequestMapping("/api/canjes")
@CrossOrigin("*")
public class CanjeController {


private final CanjeService service;


public CanjeController(CanjeService service){
    this.service = service;
}



@GetMapping
public List<Canje> listar(){

    return service.listar();

}



@PostMapping
public Canje guardar(
        @RequestBody Canje canje){

    return service.guardar(canje);

}


}
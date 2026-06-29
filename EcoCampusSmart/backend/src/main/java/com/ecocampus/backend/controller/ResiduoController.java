package com.ecocampus.backend.controller;

import com.ecocampus.backend.entity.Residuo;
import com.ecocampus.backend.service.ResiduoService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/residuos")
@CrossOrigin("*")
public class ResiduoController {

    private final ResiduoService service;

    public ResiduoController(ResiduoService service) {
        this.service = service;
    }

    @GetMapping
    public List<Residuo> listar() {
        return service.listar();
    }

    @PostMapping
    public Residuo guardar(@RequestBody Residuo residuo) {
        return service.guardar(residuo);
    }

    @PutMapping("/{id}")
    public Residuo actualizar(
            @PathVariable Integer id,
            @RequestBody Residuo residuo) {

        return service.actualizar(id, residuo);
    }

    @DeleteMapping("/{id}")
    public void eliminar(@PathVariable Integer id) {
        service.eliminar(id);
    }
}

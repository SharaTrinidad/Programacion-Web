package com.ecocampus.backend.service;

import com.ecocampus.backend.entity.Residuo;
import com.ecocampus.backend.repository.ResiduoRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ResiduoService {

    private final ResiduoRepository repository;

    public ResiduoService(ResiduoRepository repository) {
        this.repository = repository;
    }

    public List<Residuo> listar() {
        return repository.findAll();
    }

    public Residuo guardar(Residuo residuo) {
        return repository.save(residuo);
    }

    public Residuo actualizar(Integer id, Residuo residuo) {
        residuo.setId(id);
        return repository.save(residuo);
    }

    public void eliminar(Integer id) {
        repository.deleteById(id);
    }
}

package com.ecocampus.backend.service;

import com.ecocampus.backend.entity.Estudiante;
import com.ecocampus.backend.repository.EstudianteRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class EstudianteService {

    private final EstudianteRepository repository;

    public EstudianteService(EstudianteRepository repository) {
        this.repository = repository;
    }

    public List<Estudiante> listar() {
        return repository.findAll();
    }

    public Estudiante guardar(Estudiante estudiante) {
        return repository.save(estudiante);
    }

    public void eliminar(Integer id) {
    repository.deleteById(id);
    }

    public Estudiante actualizar(Integer id, Estudiante estudiante) {
        estudiante.setId(id);
        return repository.save(estudiante);
    }
}
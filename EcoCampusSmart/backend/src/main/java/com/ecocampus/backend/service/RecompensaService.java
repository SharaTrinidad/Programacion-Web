package com.ecocampus.backend.service;

import com.ecocampus.backend.entity.Recompensa;
import com.ecocampus.backend.repository.RecompensaRepository;
import org.springframework.stereotype.Service;

import java.util.List;


@Service
public class RecompensaService {


    private final RecompensaRepository repository;


    public RecompensaService(RecompensaRepository repository){
        this.repository = repository;
    }


    public List<Recompensa> listar(){
        return repository.findAll();
    }


    public Recompensa guardar(Recompensa recompensa){
        return repository.save(recompensa);
    }


    public Recompensa actualizar(Integer id, Recompensa recompensa){

        recompensa.setId(id);

        return repository.save(recompensa);
    }


    public void eliminar(Integer id){

        repository.deleteById(id);
    }

}
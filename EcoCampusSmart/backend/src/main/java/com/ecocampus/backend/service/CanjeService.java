package com.ecocampus.backend.service;


import com.ecocampus.backend.entity.*;
import com.ecocampus.backend.repository.*;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;


@Service
public class CanjeService {


private final CanjeRepository repository;
private final EstudianteRepository estudianteRepository;
private final RecompensaRepository recompensaRepository;



public CanjeService(
        CanjeRepository repository,
        EstudianteRepository estudianteRepository,
        RecompensaRepository recompensaRepository
){
    this.repository = repository;
    this.estudianteRepository = estudianteRepository;
    this.recompensaRepository = recompensaRepository;
}



public List<Canje> listar(){

    return repository.findAll();

}



public Canje guardar(Canje canje){


    Estudiante estudiante =
            estudianteRepository
            .findById(canje.getEstudiante().getId())
            .orElseThrow();



    Recompensa recompensa =
            recompensaRepository
            .findById(canje.getRecompensa().getId())
            .orElseThrow();



    if(estudiante.getPuntos() < recompensa.getPuntosNecesarios()){

        throw new RuntimeException("Puntos insuficientes");

    }



    estudiante.setPuntos(
        estudiante.getPuntos()
        - recompensa.getPuntosNecesarios()
    );


    estudianteRepository.save(estudiante);



    canje.setEstudiante(estudiante);
    canje.setRecompensa(recompensa);
    canje.setFecha(LocalDateTime.now());


    return repository.save(canje);

}

}

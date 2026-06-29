package com.ecocampus.backend.service;

import com.ecocampus.backend.entity.Estudiante;
import com.ecocampus.backend.entity.RegistroReciclaje;
import com.ecocampus.backend.entity.Residuo;
import com.ecocampus.backend.repository.ResiduoRepository;
import com.ecocampus.backend.repository.EstudianteRepository;
import com.ecocampus.backend.repository.RegistroReciclajeRepository;
import org.springframework.stereotype.Service;


import java.util.List;

@Service
public class RegistroReciclajeService {

    private final RegistroReciclajeRepository repository;
    private final EstudianteRepository estudianteRepository;
    private final ResiduoRepository residuoRepository;

    public RegistroReciclajeService(
        RegistroReciclajeRepository repository,
        EstudianteRepository estudianteRepository,
        ResiduoRepository residuoRepository
    ){
        this.repository = repository;
        this.estudianteRepository = estudianteRepository;
        this.residuoRepository = residuoRepository;
    }


    public List<RegistroReciclaje> listar(){
        return repository.findAll();
    }


    public RegistroReciclaje guardar(RegistroReciclaje registro){

        Estudiante estudiante = estudianteRepository
                .findById(registro.getEstudiante().getId())
                .orElseThrow();


        Residuo residuo = residuoRepository
                .findById(registro.getResiduo().getId())
                .orElseThrow();


        Integer puntosActuales = estudiante.getPuntos();

        if(puntosActuales == null){
            puntosActuales = 0;
        }


        estudiante.setPuntos(
                puntosActuales + registro.getPuntosGanados()
        );


        estudianteRepository.save(estudiante);


        registro.setEstudiante(estudiante);
        registro.setResiduo(residuo);


        return repository.save(registro);
    }


    public void eliminar(Integer id){
        repository.deleteById(id);
    }
}
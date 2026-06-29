package com.ecocampus.backend.entity;

import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDateTime;

@Entity
@Table(name = "Estudiante")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder

public class Estudiante {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(nullable = false, unique = true, length = 15)
    private String codigo;

    @Column(nullable = false, length = 100)
    private String nombres;

    @Column(nullable = false, length = 100)
    private String apellidos;

    @Column(nullable = false, unique = true, length = 120)
    private String correo;

    @Column(nullable = false, length = 100)
    private String carrera;

    @Column(nullable = false)
    private Integer puntos;

    @Column(nullable = false)
    private Boolean estado;

    @Column(name = "fecha_Registro")
    private LocalDateTime fechaRegistro;

    
}


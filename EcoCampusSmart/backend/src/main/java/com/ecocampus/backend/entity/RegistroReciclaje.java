package com.ecocampus.backend.entity;

import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDateTime;

@Entity
@Table(name = "RegistroReciclaje")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class RegistroReciclaje {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;


    @ManyToOne
    @JoinColumn(name = "estudiante_id")
    private Estudiante estudiante;


    @ManyToOne
    @JoinColumn(name = "residuo_id")
    private Residuo residuo;


    @Column(nullable = false)
    private Double cantidadKg;


    @Column(nullable = false)
    private Integer puntosGanados;


    private LocalDateTime fechaRegistro;
}
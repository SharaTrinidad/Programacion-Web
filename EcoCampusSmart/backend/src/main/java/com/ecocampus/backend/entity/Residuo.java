package com.ecocampus.backend.entity;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "Residuo")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Residuo {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(nullable = false, unique = true, length = 50)
    private String nombre;

    @Column(nullable = false)
    private Integer puntosPorKg;

    @Column(length = 200)
    private String descripcion;
}
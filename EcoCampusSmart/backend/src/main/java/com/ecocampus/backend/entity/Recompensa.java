package com.ecocampus.backend.entity;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name="Recompensa")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Recompensa {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;


    @Column(nullable=false)
    private String nombre;


    @Column(nullable=false)
    private Integer puntosNecesarios;


    private String descripcion;


    private Boolean estado;
}

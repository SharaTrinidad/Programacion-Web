package com.ecocampus.backend.entity;

import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDateTime;


@Entity
@Table(name="Canje")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Canje {


    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;



    @ManyToOne
    @JoinColumn(name="estudiante_id")
    private Estudiante estudiante;



    @ManyToOne
    @JoinColumn(name="recompensa_id")
    private Recompensa recompensa;



    private LocalDateTime fecha;

}
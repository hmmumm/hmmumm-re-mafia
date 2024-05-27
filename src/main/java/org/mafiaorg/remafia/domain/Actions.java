package org.mafiaorg.remafia.domain;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.sql.Timestamp;

@Entity
@Getter
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class Actions {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long actionId;

    @ManyToOne
    @JoinColumn(name = "game_id",nullable = false)
    private Game game;

    @ManyToOne
    @JoinColumn(name = "player_id",nullable = false)
    private Player player;

    @ManyToOne
    @JoinColumn(name = "target_id",nullable = false)
    private Player target;

    @Column(nullable = false)
    private String actionType;

    @Builder.Default
    @Column(nullable = false)
    private Timestamp actionTime = new Timestamp(System.currentTimeMillis());
}


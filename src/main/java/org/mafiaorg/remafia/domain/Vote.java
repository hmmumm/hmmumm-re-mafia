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
public class Vote {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long voteId;

    @ManyToOne
    @JoinColumn(name = "game_id")
    private Game game;

    @ManyToOne
    @JoinColumn(name = "voter_id")
    private Player voter;

    @ManyToOne
    @JoinColumn(name = "target_id", nullable = false)
    private Player target;

    @Column(nullable = false)
    private Timestamp voteTime = new Timestamp(System.currentTimeMillis());
}


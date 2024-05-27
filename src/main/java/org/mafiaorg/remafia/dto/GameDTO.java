package org.mafiaorg.remafia.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.security.Timestamp;
import java.util.List;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class GameDTO {
    private long id;
    private Timestamp startTime;
    private Timestamp endTime;
    private String winnerTeam;
    private List<GamePlayerDTO> players;
}

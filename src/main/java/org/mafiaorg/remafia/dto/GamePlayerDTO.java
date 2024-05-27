package org.mafiaorg.remafia.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class GamePlayerDTO {
    private long id;
    private long gameId;
    private long playerId;
    private String role;
    private boolean isAlive;
}

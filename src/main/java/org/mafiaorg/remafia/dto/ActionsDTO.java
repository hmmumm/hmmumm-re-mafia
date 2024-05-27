package org.mafiaorg.remafia.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.security.Timestamp;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class ActionsDTO {
    private long id;
    private long gameId;
    private long actorId;
    private long targetId;
    private String actionType;
    private Timestamp actionTime;
}

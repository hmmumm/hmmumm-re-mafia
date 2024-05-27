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
public class VoteDTO {
    private long id;
    private long gameId;
    private long voterId;
    private long targetId;
    private Timestamp voteTime;
}

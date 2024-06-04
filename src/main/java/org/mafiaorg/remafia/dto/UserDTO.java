package org.mafiaorg.remafia.dto;

import lombok.*;
import org.springframework.web.multipart.MultipartFile;
@Builder
@Data
@AllArgsConstructor
@NoArgsConstructor
public class UserDTO {
    private Long userId;
    private String username;
    private String nickname;
    private String password;
    private String profileImagePath;
}

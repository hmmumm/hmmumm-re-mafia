package org.mafiaorg.remafia.domain;



import jakarta.persistence.*;
import lombok.*;



@Entity
@Getter
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long userId;

    @Column(nullable = false, unique = true)
    private String username;

    @Column(nullable = false)
    private String password;

    @Column(nullable = false)
    private String salt;

    @OneToOne(mappedBy = "user", cascade = CascadeType.ALL)
    private Player player;
}

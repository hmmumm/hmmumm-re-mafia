package org.mafiaorg.remafia.controller;

import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import jakarta.servlet.http.HttpSession;
import jakarta.validation.Valid;
import jakarta.validation.ValidationException;
import org.mafiaorg.remafia.domain.User;
import org.mafiaorg.remafia.dto.UserDTO;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping("api/auth")
public class ApiController {
    private final String DEFAULT_IMAGE_URL = "https://www.flaticon.com/free-icons/user";



    // 회원가입 post
    @PostMapping("/register")
    public ResponseEntity<String> register(@Valid @ModelAttribute UserDTO userDTO, BindingResult result) throws Exception {
        if (result.hasErrors()) {
            throw new ValidationException("Validation failed: " + result.getAllErrors());
        }

        // 파일 저장 로직
//        String filePath = DEFAULT_IMAGE_URL;
//        if (userDTO.getFile() != null && !userDTO.getFile().isEmpty()) {
//            filePath = fileStorageService.storeFile(userDTO.getFile());
//        } else {
//            filePath = DEFAULT_IMAGE_URL;
//        }
//        userDTO.setProfileImagePath(filePath);
//        userService.registerUser(userDTO);
        return ResponseEntity.status(HttpStatus.CREATED).body("User registered successfully");
    }

    //    // 로그인 요청 post
    @PostMapping("/login")
    public ResponseEntity<?> Login(@RequestBody UserDTO userDTO, HttpServletRequest request, HttpServletResponse response) throws Exception {
        //유저 인증 로직
        Optional<User> userOptional = null;
//                userRepository.findByUsername(userDTO.getUsername());
//        if (!userOptional.isPresent() || !passwordEncoder.matches(userDTO.getPassword(), userOptional.get().getPassword())) {
//            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid username or password");
//        }
        //세션에 유저 정보 저장
        User user = userOptional.get();
        HttpSession session = request.getSession();
        session.setAttribute("user", user);
        return ResponseEntity.ok(user);
    }

    @GetMapping("/setting")
    public ResponseEntity<?> getUserSetting(HttpServletRequest request) {
        HttpSession session = request.getSession(false);
        if (session != null || session.getAttribute("user") != null) {
            User user = (User) session.getAttribute("user");
            return ResponseEntity.ok(user);
        }
        return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid username or password");

    }
    // 게임방 생성시 인메모리 데이터베이스(Redis)를 사용하여 대기중인 방을 생성해서 관리할 것.
    // 게임 방 생성 요청 post

    // 게임방 리스트 역시 생성된 대기방의 리스트를 저장하여 보여줄것
    // 게임방 리스트 요청 get

    // 마이페이지 불러오기 요청 get

    // 마이페이지 수정 요청 PUT & PATCH 사용하는데 PUT은 전체적으로 업데이트 할 때, PATCH는 부분적으로 업데이트 할때


    // ------------

    //채팅 보내기 요청

    //게임 시작 요청? POST -> 생성된 방을 통해 유저들의 정보 테이블에 입력
    //게임 종료 요청? PUT -> 전체적으로 업데이트해야하기 때문에
    //게임중 유저가 사망했을 때 요청? PATCH

}

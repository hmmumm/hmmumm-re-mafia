package org.mafiaorg.remafia.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class PageController {
//관리자 페이지 만들공간? 아직 미정
    @GetMapping("/")
    public String index() {
        return "index";
    }
}

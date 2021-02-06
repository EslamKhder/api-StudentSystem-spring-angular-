package com.spring.student.controller;

import com.spring.student.model.LoginUser;
import com.spring.student.service.TokenService;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;
import org.springframework.web.bind.annotation.*;

@CrossOrigin("http://localhost:4200")
@RestController
@RequestMapping("/")
@AllArgsConstructor
@NoArgsConstructor
public class Login {

    private TokenService tokenService;

    @PostMapping("signin")
    public String login(@RequestBody LoginUser loginUser){
        return tokenService.login(loginUser);
    }

}

package com.spring.student.controller;

import com.spring.student.model.LoginUser;
import org.springframework.web.bind.annotation.*;

@CrossOrigin("http://localhost:4200")
@RestController
@RequestMapping("/")
public class Login {

    @PostMapping("signin")
    public String login(@RequestBody LoginUser loginUser){
        return "TOKEN";
    }
}

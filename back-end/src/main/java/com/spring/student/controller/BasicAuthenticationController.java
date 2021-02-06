package com.spring.student.controller;


import com.spring.student.model.AuthenticationBean;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin("http://localhost:4200")
@RestController
public class BasicAuthenticationController {

    @GetMapping("/basicauth")
    public AuthenticationBean BasicAuthentication(){
        return new AuthenticationBean("you are Authentication");
    }

    @GetMapping("/main")
    public String Main(){
        return "yes";
    }

}

package com.spring.student.controller;


import com.spring.student.config.jwt.MyJwtAuthenticationFilter;
import com.spring.student.model.JwtLogin;
import org.springframework.web.bind.annotation.*;

@CrossOrigin("http://localhost:4200")
@RestController
@RequestMapping("/")
public class Main {

    private MyJwtAuthenticationFilter myJwtAuthenticationFilter;

    public Main(MyJwtAuthenticationFilter myJwtAuthenticationFilter) {
        this.myJwtAuthenticationFilter = myJwtAuthenticationFilter;
    }

    @PostMapping("signin")
    public String signin(@RequestBody JwtLogin jwtLogin){
        return this.myJwtAuthenticationFilter.login(jwtLogin);
    }
}

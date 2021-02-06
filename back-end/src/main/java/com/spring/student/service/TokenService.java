package com.spring.student.service;


import com.auth0.jwt.JWT;
import com.spring.student.config.jwt.JwtProperties;
import com.spring.student.model.LoginUser;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.User;
import org.springframework.stereotype.Service;

import java.util.Date;

import static com.auth0.jwt.algorithms.Algorithm.HMAC512;

@Service
@AllArgsConstructor
@NoArgsConstructor
public class TokenService {

    private AuthenticationManager authenticationManager;


    public String login(LoginUser loginUser){
        Authentication authentication = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(loginUser.getUsername(),loginUser.getPassword())
        );
        SecurityContextHolder.getContext().setAuthentication(authentication);
        String token = createToken(authentication);
        return token;
    }

    private String createToken(Authentication authentication) {
        User user = (User) authentication.getPrincipal();
        // Create JWT Token
        String token = JWT.create()
                .withSubject(user.getUsername())
                .withExpiresAt(new Date(System.currentTimeMillis() + JwtProperties.EXPIRATION_TIME))
                .sign(HMAC512(JwtProperties.SECRET.getBytes()));
        return token;
    }
}

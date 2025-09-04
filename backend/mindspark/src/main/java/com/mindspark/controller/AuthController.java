package com.mindspark.controller;


import com.mindspark.dto.LoginRequest;
import com.mindspark.jwt.JWTUtil;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/api/auth")
public class AuthController {

    private final JWTUtil jwtUtil;

    public AuthController(JWTUtil jwtUtil){
        this.jwtUtil = jwtUtil;
    }

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody LoginRequest loginRequest){
        String username = loginRequest.getUsername().trim();
        String password = loginRequest.getPassword().trim();

        if("mindsparkeducation".equals(username) && "admin@mindspark".equals(password)){
            String token = jwtUtil.generateToken(username);
            return ResponseEntity.ok(Map.of("token", token));
        }

        return ResponseEntity.status(401).body(Map.of("error", "Invalid Credentials"));
    }


}

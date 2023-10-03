package dev.razepl.noteapp.auth.interfaces;

import dev.razepl.noteapp.auth.data.AuthResponse;
import dev.razepl.noteapp.auth.data.LoginRequest;
import dev.razepl.noteapp.auth.data.RegisterRequest;
import dev.razepl.noteapp.auth.data.TokenRequest;
import dev.razepl.noteapp.auth.data.TokenResponse;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

public interface AuthService {
    AuthResponse register(RegisterRequest userRequest);

    AuthResponse login(LoginRequest loginRequest);

    AuthResponse refreshToken(HttpServletRequest request, HttpServletResponse response);

    TokenResponse validateUsersTokens(TokenRequest request);

}


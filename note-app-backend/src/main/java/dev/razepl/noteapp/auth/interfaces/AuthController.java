package dev.razepl.noteapp.auth.interfaces;

import dev.razepl.noteapp.auth.data.AuthResponse;
import dev.razepl.noteapp.auth.data.LoginRequest;
import dev.razepl.noteapp.auth.data.RegisterRequest;
import dev.razepl.noteapp.auth.data.TokenRequest;
import dev.razepl.noteapp.auth.data.TokenResponse;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

public interface AuthController {
    AuthResponse registerUser(RegisterRequest registerRequest);

    AuthResponse loginUser(LoginRequest loginRequest);

    AuthResponse refreshUserToken(HttpServletRequest request, HttpServletResponse response);

    TokenResponse authenticateUser(TokenRequest request);
}

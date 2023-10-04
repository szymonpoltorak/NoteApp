package dev.razepl.noteapp.api.auth.interfaces;

import dev.razepl.noteapp.api.auth.data.AuthResponse;
import dev.razepl.noteapp.api.auth.data.LoginRequest;
import dev.razepl.noteapp.api.auth.data.RegisterRequest;
import dev.razepl.noteapp.api.auth.data.TokenRequest;
import dev.razepl.noteapp.api.auth.data.TokenResponse;

public interface AuthService {
    AuthResponse register(RegisterRequest userRequest);

    AuthResponse login(LoginRequest loginRequest);

    AuthResponse refreshToken(String refreshToken);

    TokenResponse validateUsersTokens(TokenRequest request);

}


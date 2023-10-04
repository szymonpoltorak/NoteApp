package dev.razepl.noteapp.api.auth.interfaces;

import dev.razepl.noteapp.api.auth.data.AuthResponse;
import dev.razepl.noteapp.api.auth.data.LoginRequest;
import dev.razepl.noteapp.api.auth.data.RegisterRequest;
import dev.razepl.noteapp.api.auth.data.TokenRequest;
import dev.razepl.noteapp.api.auth.data.TokenResponse;

public interface AuthController {
    AuthResponse registerUser(RegisterRequest registerRequest);

    AuthResponse loginUser(LoginRequest loginRequest);

    AuthResponse refreshUserToken(String refreshToken);

    TokenResponse authenticateUser(TokenRequest request);
}

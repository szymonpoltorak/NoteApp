package razepl.dev.noteapp.api.auth.interfaces;

import razepl.dev.noteapp.api.auth.data.AuthResponse;
import razepl.dev.noteapp.api.auth.data.LoginRequest;
import razepl.dev.noteapp.api.auth.data.RegisterRequest;
import razepl.dev.noteapp.api.auth.data.TokenRequest;
import razepl.dev.noteapp.api.auth.data.TokenResponse;

public interface AuthController {
    AuthResponse registerUser(RegisterRequest registerRequest);

    AuthResponse loginUser(LoginRequest loginRequest);

    AuthResponse refreshUserToken(String refreshToken);

    TokenResponse authenticateUser(TokenRequest request);
}

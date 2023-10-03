package dev.razepl.noteapp.auth;

import dev.razepl.noteapp.auth.data.AuthResponse;
import dev.razepl.noteapp.auth.data.LoginRequest;
import dev.razepl.noteapp.auth.data.RegisterRequest;
import dev.razepl.noteapp.auth.data.TokenRequest;
import dev.razepl.noteapp.auth.data.TokenResponse;
import dev.razepl.noteapp.auth.interfaces.AuthController;
import dev.razepl.noteapp.auth.interfaces.AuthService;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import static dev.razepl.noteapp.auth.constants.AuthMappings.AUTHENTICATE_MAPPING;
import static dev.razepl.noteapp.auth.constants.AuthMappings.LOGIN_MAPPING;
import static dev.razepl.noteapp.auth.constants.AuthMappings.REFRESH_MAPPING;
import static dev.razepl.noteapp.auth.constants.AuthMappings.REGISTER_MAPPING;
import static dev.razepl.noteapp.config.constants.Matchers.AUTH_MAPPING;

@RequiredArgsConstructor
@RestController
@RequestMapping(value = AUTH_MAPPING)
public class AuthControllerImpl implements AuthController {
    private final AuthService authService;

    @Override
    @PostMapping(value = REGISTER_MAPPING)
    @ResponseStatus(value = HttpStatus.CREATED)
    public final AuthResponse registerUser(@RequestBody RegisterRequest registerRequest) {
        return authService.register(registerRequest);
    }

    @Override
    @PostMapping(value = LOGIN_MAPPING)
    public final AuthResponse loginUser(@RequestBody LoginRequest loginRequest) {
        return authService.login(loginRequest);
    }

    @Override
    @PostMapping(value = REFRESH_MAPPING)
    public final AuthResponse refreshUserToken(@RequestParam String refreshToken) {
        return authService.refreshToken(refreshToken);
    }

    @Override
    @PostMapping(value = AUTHENTICATE_MAPPING)
    public final TokenResponse authenticateUser(@RequestBody TokenRequest request) {
        return authService.validateUsersTokens(request);
    }
}

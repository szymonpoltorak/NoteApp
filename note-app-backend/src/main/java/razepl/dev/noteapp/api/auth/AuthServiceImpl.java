package razepl.dev.noteapp.api.auth;

import razepl.dev.noteapp.api.auth.data.AuthResponse;
import razepl.dev.noteapp.api.auth.data.LoginRequest;
import razepl.dev.noteapp.api.auth.data.RegisterRequest;
import razepl.dev.noteapp.api.auth.data.TokenRequest;
import razepl.dev.noteapp.api.auth.data.TokenResponse;
import razepl.dev.noteapp.api.auth.interfaces.AuthService;
import razepl.dev.noteapp.config.jwt.interfaces.JwtService;
import razepl.dev.noteapp.config.jwt.interfaces.TokenManagerService;
import razepl.dev.noteapp.entities.user.User;
import razepl.dev.noteapp.entities.user.interfaces.UserMapper;
import razepl.dev.noteapp.entities.user.interfaces.UserRepository;
import razepl.dev.noteapp.exceptions.auth.InvalidTokenException;
import razepl.dev.noteapp.exceptions.auth.TokenDoesNotExistException;
import razepl.dev.noteapp.exceptions.auth.TokensUserNotFoundException;
import razepl.dev.noteapp.exceptions.auth.UserAlreadyExistsException;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Slf4j
@Service
@RequiredArgsConstructor
public class AuthServiceImpl implements AuthService {
    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    private final AuthenticationManager authenticationManager;
    private final TokenManagerService tokenManager;
    private final JwtService jwtService;
    private final UserMapper userMapper;

    @Override
    public final AuthResponse register(@Valid RegisterRequest registerRequest) {
        log.info("Registering user with data: \n{}", registerRequest);

        String password = validateUserRegisterData(registerRequest);

        User user = userMapper.toUser(registerRequest, passwordEncoder.encode(password));

        createUserWithEncodedPassword(user);

        log.info("Building token response for user : {}", user);

        return tokenManager.buildTokensIntoResponse(user, false);
    }

    @Override
    public final AuthResponse login(LoginRequest loginRequest) {
        log.info("Logging user with data: \n{}", loginRequest);

        String username = loginRequest.username();

        authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(
                username, loginRequest.password())
        );

        User user = userRepository.findByUsername(username).orElseThrow(
                () -> new UsernameNotFoundException("Such user does not exist!")
        );
        log.info("Building token response for user : {}", user);

        return tokenManager.buildTokensIntoResponse(user, true);
    }

    @Override
    public final AuthResponse refreshToken(String refreshToken) {
        log.info("Refresh token : {}", refreshToken);

        User user = validateRefreshTokenData(refreshToken);
        String authToken = jwtService.generateToken(user);

        log.info("New auth token : {}\nFor user : {}", authToken, user);

        tokenManager.revokeUserTokens(user);

        tokenManager.saveUsersToken(authToken, user);

        return tokenManager.buildTokensIntoResponse(authToken, refreshToken);
    }

    @Override
    public final TokenResponse validateUsersTokens(TokenRequest request) {
        log.info("Authenticating user with data:\n{}", request);

        User user = userRepository.findUserByToken(request.authToken()).orElseThrow(TokensUserNotFoundException::new);

        boolean isAuthTokenValid = jwtService.isTokenValid(request.authToken(), user);

        log.info("Is token valid : {}\nFor user : {}", isAuthTokenValid, user);

        return TokenResponse
                .builder()
                .isAuthTokenValid(isAuthTokenValid)
                .build();
    }

    private void createUserWithEncodedPassword(@Valid User user) {
        userRepository.save(user);
    }

    private String validateUserRegisterData(RegisterRequest registerRequest) {
        String password = registerRequest.password();

        Optional<User> existingUser = userRepository.findByUsername(registerRequest.username());

        if (existingUser.isPresent()) {
            log.error("User already exists! Found user: {}", existingUser.get());

            throw new UserAlreadyExistsException("User already exists!");
        }
        return password;
    }

    private User validateRefreshTokenData(String refreshToken) {
        if (refreshToken == null) {
            throw new TokenDoesNotExistException("Token does not exist!");
        }
        String username = jwtService.getUsernameFromToken(refreshToken);

        if (username == null) {
            throw new UsernameNotFoundException("Such user does not exist!");
        }
        log.info("User of username : {}", username);

        User user = userRepository.findByUsername(username).orElseThrow(
                () -> new UsernameNotFoundException("Such user does not exist!")
        );

        if (!jwtService.isTokenValid(refreshToken, user)) {
            throw new InvalidTokenException("Token is not valid!");
        }
        return user;
    }
}

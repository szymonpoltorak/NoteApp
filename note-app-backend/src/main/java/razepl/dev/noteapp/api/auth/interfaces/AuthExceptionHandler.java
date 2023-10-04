package razepl.dev.noteapp.api.auth.interfaces;

import razepl.dev.noteapp.api.auth.data.ConstraintExceptionResponse;
import razepl.dev.noteapp.api.auth.data.ExceptionResponse;
import razepl.dev.noteapp.api.auth.data.TokenResponse;
import jakarta.validation.ConstraintViolationException;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.web.bind.MethodArgumentNotValidException;

public interface AuthExceptionHandler {
    ResponseEntity<ConstraintExceptionResponse> handleConstraintValidationExceptions(ConstraintViolationException exception);

    ResponseEntity<ExceptionResponse> handleMethodArgValidExceptions(MethodArgumentNotValidException exception);

    ResponseEntity<ExceptionResponse> handleUserNotFoundException(UsernameNotFoundException exception);

    ResponseEntity<ExceptionResponse> handleTokenExceptions(IllegalArgumentException exception);

    ResponseEntity<ExceptionResponse> handleUserExistException(IllegalStateException exception);

    ResponseEntity<TokenResponse> handleTokenExceptions(IllegalStateException exception);
}
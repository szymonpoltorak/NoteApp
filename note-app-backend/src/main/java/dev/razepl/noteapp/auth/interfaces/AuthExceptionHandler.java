package dev.razepl.noteapp.auth.interfaces;

import dev.razepl.noteapp.auth.data.ExceptionResponse;
import dev.razepl.noteapp.auth.data.TokenResponse;
import jakarta.validation.ConstraintViolationException;
import jakarta.validation.ValidationException;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.web.bind.MethodArgumentNotValidException;

public interface AuthExceptionHandler {
    ResponseEntity<ExceptionResponse> handleConstraintValidationExceptions(ConstraintViolationException exception);

    ResponseEntity<ExceptionResponse> handleMethodArgValidExceptions(MethodArgumentNotValidException exception);

    ResponseEntity<ExceptionResponse> handlePasswordValidationException(ValidationException exception);

    ResponseEntity<ExceptionResponse> handleUserNotFoundException(UsernameNotFoundException exception);

    ResponseEntity<ExceptionResponse> handleTokenExceptions(IllegalArgumentException exception);

    ResponseEntity<ExceptionResponse> handleUserExistException(IllegalStateException exception);

    ResponseEntity<TokenResponse> handleTokenExceptions(IllegalStateException exception);
}

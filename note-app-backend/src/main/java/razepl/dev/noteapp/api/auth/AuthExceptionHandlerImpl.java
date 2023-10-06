package razepl.dev.noteapp.api.auth;

import jakarta.validation.ConstraintViolationException;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import razepl.dev.noteapp.api.auth.constants.AuthMessages;
import razepl.dev.noteapp.api.auth.data.ConstraintExceptionResponse;
import razepl.dev.noteapp.api.auth.data.ExceptionResponse;
import razepl.dev.noteapp.api.auth.data.TokenResponse;
import razepl.dev.noteapp.api.auth.interfaces.AuthExceptionHandler;
import razepl.dev.noteapp.exceptions.auth.InvalidTokenException;
import razepl.dev.noteapp.exceptions.auth.TokenDoesNotExistException;
import razepl.dev.noteapp.exceptions.auth.TokensUserNotFoundException;
import razepl.dev.noteapp.exceptions.auth.UserAlreadyExistsException;

import java.util.List;
import java.util.stream.Collectors;

@Slf4j
@ControllerAdvice
public class AuthExceptionHandlerImpl implements AuthExceptionHandler {
    @Override
    @ExceptionHandler(ConstraintViolationException.class)
    public final ResponseEntity<ConstraintExceptionResponse> handleConstraintValidationExceptions
            (ConstraintViolationException exception) {
        String className = exception.getClass().getSimpleName();
        List<String> errorResponse = exception.getConstraintViolations()
                .stream()
                .map(error -> String.format(AuthMessages.ERROR_FORMAT, error.getPropertyPath(), error.getMessage()))
                .toList();

        log.error("Exception class name : {}\nError message : {}", className, errorResponse);

        return new ResponseEntity<>(buildConstraintResponse(errorResponse, className), HttpStatus.BAD_REQUEST);
    }

    @Override
    @ExceptionHandler(MethodArgumentNotValidException.class)
    public final ResponseEntity<ExceptionResponse> handleMethodArgValidExceptions(MethodArgumentNotValidException exception) {
        String className = exception.getClass().getSimpleName();
        String errorMessage = exception.getBindingResult()
                .getFieldErrors()
                .stream()
                .map(error -> String.format(AuthMessages.ERROR_FORMAT, error.getField(), error.getDefaultMessage()))
                .collect(Collectors.joining(AuthMessages.ERROR_DELIMITER));

        log.error("Exception class name : {}\nError message : {}", className, errorMessage);

        return new ResponseEntity<>(buildResponse(errorMessage, className), HttpStatus.BAD_REQUEST);
    }

    @Override
    @ExceptionHandler(UsernameNotFoundException.class)
    public final ResponseEntity<ExceptionResponse> handleUserNotFoundException(UsernameNotFoundException exception) {
        return buildResponseEntity(exception, HttpStatus.NOT_FOUND);
    }

    @Override
    @ExceptionHandler({InvalidTokenException.class, TokenDoesNotExistException.class})
    public final ResponseEntity<ExceptionResponse> handleTokenExceptions(IllegalArgumentException exception) {
        return buildResponseEntity(exception, HttpStatus.UNAUTHORIZED);
    }

    @Override
    @ExceptionHandler(UserAlreadyExistsException.class)
    public final ResponseEntity<ExceptionResponse> handleUserExistException(IllegalStateException exception) {
        return buildResponseEntity(exception, HttpStatus.UNPROCESSABLE_ENTITY);
    }

    @Override
    @ExceptionHandler(TokensUserNotFoundException.class)
    public final ResponseEntity<TokenResponse> handleTokenExceptions(IllegalStateException exception) {
        String className = exception.getClass().getSimpleName();
        TokenResponse response = TokenResponse.builder().isAuthTokenValid(false).build();

        log.error("Exception class name : {}\nError message : {}", className, exception.getMessage());

        return new ResponseEntity<>(response, HttpStatus.UNAUTHORIZED);
    }

    private ResponseEntity<ExceptionResponse> buildResponseEntity(Exception exception, HttpStatus status) {
        String errorMessage = exception.getMessage();
        String className = exception.getClass().getSimpleName();

        log.error("Exception class name : {}\nError message : {}", className, errorMessage);

        return new ResponseEntity<>(buildResponse(errorMessage, className), status);
    }

    private ConstraintExceptionResponse buildConstraintResponse(List<String> errorResponse, String className) {
        return ConstraintExceptionResponse
                .builder()
                .errorResponse(errorResponse)
                .exceptionClassName(className)
                .build();
    }

    private ExceptionResponse buildResponse(String errorMessage, String exceptionClassName) {
        return ExceptionResponse.builder()
                .errorMessage(errorMessage)
                .exceptionClassName(exceptionClassName)
                .build();
    }
}

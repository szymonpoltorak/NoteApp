package razepl.dev.noteapp.api.notes;

import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import razepl.dev.noteapp.api.auth.data.ExceptionResponse;
import razepl.dev.noteapp.api.notes.interfaces.NoteExceptionHandler;
import razepl.dev.noteapp.exceptions.notes.NoteDoesNotExistException;

@Slf4j
@ControllerAdvice
public class NoteExceptionHandlerImpl implements NoteExceptionHandler {
    @Override
    @ExceptionHandler(NoteDoesNotExistException.class)
    public final ResponseEntity<ExceptionResponse> handleNoteDoesNotExistException(RuntimeException exception) {
        String errorMessage = exception.getMessage();
        String className = exception.getClass().getSimpleName();
        ExceptionResponse exceptionResponse = ExceptionResponse
                .builder()
                .exceptionClassName(className)
                .errorMessage(errorMessage)
                .build();

        log.error("Exception occurred with className : {}", className);
        log.error("Exception occurred with errorMessage : {}", errorMessage);

        return new ResponseEntity<>(exceptionResponse, HttpStatus.NOT_FOUND);
    }
}

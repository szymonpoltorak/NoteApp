package razepl.dev.noteapp.api.notes.interfaces;

import org.springframework.http.ResponseEntity;
import razepl.dev.noteapp.api.auth.data.ExceptionResponse;

@FunctionalInterface
public interface NoteExceptionHandler {
    ResponseEntity<ExceptionResponse> handleNoteDoesNotExistException(RuntimeException exception);
}

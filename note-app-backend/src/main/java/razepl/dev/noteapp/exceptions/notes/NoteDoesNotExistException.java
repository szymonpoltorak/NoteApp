package razepl.dev.noteapp.exceptions.notes;

public class NoteDoesNotExistException extends RuntimeException {
    public NoteDoesNotExistException(String message) {
        super(message);
    }
}

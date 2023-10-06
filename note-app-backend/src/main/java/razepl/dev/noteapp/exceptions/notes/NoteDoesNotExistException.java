package razepl.dev.noteapp.exceptions.notes;

import java.io.Serial;

public class NoteDoesNotExistException extends RuntimeException {
    @Serial
    private static final long serialVersionUID = -2951426835248142714L;

    public NoteDoesNotExistException(String message) {
        super(message);
    }
}

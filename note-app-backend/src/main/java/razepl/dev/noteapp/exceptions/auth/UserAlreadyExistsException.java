package razepl.dev.noteapp.exceptions.auth;

import java.io.Serial;

public class UserAlreadyExistsException extends IllegalStateException {
    @Serial
    private static final long serialVersionUID = 8504365313100481550L;

    public UserAlreadyExistsException(String message) {
        super(message);
    }
}


package razepl.dev.noteapp.exceptions.auth;

public class UserAlreadyExistsException extends IllegalStateException {
    public UserAlreadyExistsException(String message) {
        super(message);
    }
}


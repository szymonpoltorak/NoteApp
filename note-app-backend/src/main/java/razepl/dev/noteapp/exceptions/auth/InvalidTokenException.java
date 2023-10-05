package razepl.dev.noteapp.exceptions.auth;

public class InvalidTokenException extends IllegalArgumentException {
    public InvalidTokenException(String message) {
        super(message);
    }
}

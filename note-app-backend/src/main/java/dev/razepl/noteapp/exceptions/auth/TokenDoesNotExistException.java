package dev.razepl.noteapp.exceptions.auth;

public class TokenDoesNotExistException extends IllegalArgumentException {
    public TokenDoesNotExistException(String message) {
        super(message);
    }
}

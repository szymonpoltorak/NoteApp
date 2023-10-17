package razepl.dev.noteapp.api.auth.data;

import lombok.Builder;
import razepl.dev.noteapp.entities.user.interfaces.Password;

import java.time.LocalDate;

@Builder
public record RegisterRequest(String name, String surname, String username, @Password String password) {
}

package razepl.dev.noteapp.api.auth.data;

import lombok.Builder;

@Builder
public record LoginRequest(String username, String password) {
}

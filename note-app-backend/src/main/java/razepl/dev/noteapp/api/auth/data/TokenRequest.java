package razepl.dev.noteapp.api.auth.data;

import lombok.Builder;

@Builder
public record TokenRequest(String authToken) {
}

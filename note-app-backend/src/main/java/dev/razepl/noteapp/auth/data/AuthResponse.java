package dev.razepl.noteapp.auth.data;

import lombok.Builder;

@Builder
public record AuthResponse(String authToken, String refreshToken) {
}

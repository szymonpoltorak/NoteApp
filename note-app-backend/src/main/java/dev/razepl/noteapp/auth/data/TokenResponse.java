package dev.razepl.noteapp.auth.data;

import lombok.Builder;

@Builder
public record TokenResponse(boolean isAuthTokenValid) {
}

package dev.razepl.noteapp.auth.data;

import lombok.Builder;

@Builder
public record LoginRequest(String username, String password) {
}

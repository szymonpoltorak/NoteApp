package dev.razepl.noteapp.auth.data;

import lombok.Builder;

@Builder
public record TokenRequest(String authToken) {
}

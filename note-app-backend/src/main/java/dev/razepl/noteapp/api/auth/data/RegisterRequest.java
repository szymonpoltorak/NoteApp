package dev.razepl.noteapp.api.auth.data;

import lombok.Builder;

import java.time.LocalDate;

@Builder
public record RegisterRequest(String name, String surname, String username, String password, LocalDate dateOfBirth) {
}

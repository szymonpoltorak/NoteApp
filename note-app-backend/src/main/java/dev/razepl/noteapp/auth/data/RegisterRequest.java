package dev.razepl.noteapp.auth.data;

import lombok.Builder;

import java.time.LocalDate;

@Builder
public record RegisterRequest(String name, String surname, String email, String password, LocalDate dateOfBirth) {
}

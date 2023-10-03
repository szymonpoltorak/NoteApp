package dev.razepl.noteapp.auth.data;

import lombok.Builder;

@Builder
public record ExceptionResponse(String errorMessage, String exceptionClassName) {
}
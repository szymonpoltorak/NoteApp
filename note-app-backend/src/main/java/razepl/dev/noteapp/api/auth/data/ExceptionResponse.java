package razepl.dev.noteapp.api.auth.data;

import lombok.Builder;

@Builder
public record ExceptionResponse(String errorMessage, String exceptionClassName) {
}
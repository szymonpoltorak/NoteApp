package razepl.dev.noteapp.api.auth.data;

import lombok.Builder;

import java.util.List;

@Builder
public record ConstraintExceptionResponse(List<String> errorResponse, String exceptionClassName) {
}

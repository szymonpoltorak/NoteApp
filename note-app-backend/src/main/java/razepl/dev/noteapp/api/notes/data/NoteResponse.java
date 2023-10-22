package razepl.dev.noteapp.api.notes.data;

import lombok.Builder;
import razepl.dev.noteapp.entities.note.NoteLang;

import java.time.LocalDate;

@Builder
public record NoteResponse(String content, String title, long noteId, NoteLang noteLang, LocalDate dateOfCreation) {
}

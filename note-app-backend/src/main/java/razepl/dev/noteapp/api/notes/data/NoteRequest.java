package razepl.dev.noteapp.api.notes.data;

import lombok.Builder;
import razepl.dev.noteapp.entities.note.NoteLang;

@Builder
public record NoteRequest(String description, String title, NoteLang noteLang) {
}

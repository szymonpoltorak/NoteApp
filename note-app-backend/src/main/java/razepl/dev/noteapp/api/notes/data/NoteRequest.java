package razepl.dev.noteapp.api.notes.data;

import razepl.dev.noteapp.entities.note.NoteLang;
import lombok.Builder;

@Builder
public record NoteRequest(String content, String title, NoteLang noteLang) {
}

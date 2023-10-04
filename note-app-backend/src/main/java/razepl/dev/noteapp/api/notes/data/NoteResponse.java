package razepl.dev.noteapp.api.notes.data;

import razepl.dev.noteapp.entities.note.NoteLang;
import lombok.Builder;

@Builder
public record NoteResponse(String content, String title, long noteId, NoteLang noteLang) {
}

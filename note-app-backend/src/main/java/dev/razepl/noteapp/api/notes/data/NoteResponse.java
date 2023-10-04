package dev.razepl.noteapp.api.notes.data;

import dev.razepl.noteapp.entities.note.NoteLang;
import lombok.Builder;

@Builder
public record NoteResponse(String content, String title, long noteId, NoteLang noteLang) {
}

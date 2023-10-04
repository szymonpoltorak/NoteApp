package dev.razepl.noteapp.api.notes.data;

import dev.razepl.noteapp.entities.note.NoteLang;
import lombok.Builder;

@Builder
public record NoteRequest(String content, String title, NoteLang noteLang) {
}

package dev.razepl.noteapp.api.notes.interfaces;

import dev.razepl.noteapp.api.notes.data.NoteResponse;
import dev.razepl.noteapp.entities.note.Note;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface NoteMapper {
    NoteResponse toNoteResponse(Note note);
}

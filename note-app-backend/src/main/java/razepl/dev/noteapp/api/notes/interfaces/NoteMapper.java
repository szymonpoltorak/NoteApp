package razepl.dev.noteapp.api.notes.interfaces;

import org.mapstruct.Mapper;
import razepl.dev.noteapp.api.notes.data.NoteRequest;
import razepl.dev.noteapp.api.notes.data.NoteResponse;
import razepl.dev.noteapp.entities.note.Note;
import razepl.dev.noteapp.entities.user.User;

import java.time.LocalDate;

@Mapper(componentModel = "spring")
public interface NoteMapper {
    NoteResponse toNoteResponse(Note note);

    Note toNote(NoteRequest noteRequest, LocalDate dateOfCreation, User noteAuthor);
}

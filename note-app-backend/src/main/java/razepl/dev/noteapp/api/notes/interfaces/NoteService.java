package razepl.dev.noteapp.api.notes.interfaces;

import razepl.dev.noteapp.api.notes.data.NoteRequest;
import razepl.dev.noteapp.api.notes.data.NoteResponse;
import razepl.dev.noteapp.entities.user.User;

import java.util.List;

public interface NoteService {
    NoteResponse createNewNote(NoteRequest noteRequest, User noteAuthor);

    List<NoteResponse> getNotesFromPage(int pageNumber, User notesAuthor);

    NoteResponse deleteNote(long noteId);

    NoteResponse updateNote(NoteResponse updateData);
}

package razepl.dev.noteapp.api.notes.interfaces;

import razepl.dev.noteapp.api.notes.data.NoteRequest;
import razepl.dev.noteapp.api.notes.data.NoteResponse;
import razepl.dev.noteapp.entities.user.User;

public interface NoteController {
    NoteResponse createNewNote(NoteRequest noteRequest, User noteAuthor);
}

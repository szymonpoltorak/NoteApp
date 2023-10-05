package razepl.dev.noteapp.utils;

import razepl.dev.noteapp.api.notes.data.NoteRequest;
import razepl.dev.noteapp.api.notes.data.NoteResponse;
import razepl.dev.noteapp.entities.note.Note;
import razepl.dev.noteapp.entities.user.User;

public record NoteTestData(Note newNote, User noteAuthor, NoteRequest noteRequest, NoteResponse noteResponse) {
}

package dev.razepl.noteapp.api.notes.interfaces;

import dev.razepl.noteapp.api.notes.data.NoteRequest;
import dev.razepl.noteapp.api.notes.data.NoteResponse;
import dev.razepl.noteapp.entities.user.User;

public interface NoteService {
    NoteResponse createNewNote(NoteRequest noteRequest, User noteAuthor);
}

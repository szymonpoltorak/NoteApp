package razepl.dev.noteapp.utils;

import razepl.dev.noteapp.api.notes.data.NoteRequest;
import razepl.dev.noteapp.api.notes.data.NoteResponse;
import razepl.dev.noteapp.entities.note.Note;
import razepl.dev.noteapp.entities.note.NoteLang;
import razepl.dev.noteapp.entities.user.User;

public class TestDataBuilder {
    private TestDataBuilder() {
    }

    public static NoteTestData buildNoteTestData() {
        String content = "description";
        String title = "title";
        long noteId = 1L;

        Note newNote = Note
                .builder()
                .description(content)
                .title(title)
                .noteId(noteId)
                .noteLang(NoteLang.TEXT)
                .build();
        User noteAuthor = User
                .builder()
                .username("author@gmail.com")
                .build();
        NoteRequest noteRequest = NoteRequest
                .builder()
                .noteLang(NoteLang.TEXT)
                .description(content)
                .title(title)
                .build();
        NoteResponse noteResponse = NoteResponse
                .builder()
                .description(content)
                .title(title)
                .noteLang(NoteLang.TEXT)
                .noteId(noteId)
                .build();
        return new NoteTestData(newNote, noteAuthor, noteRequest, noteResponse);
    }
}

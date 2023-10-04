package dev.razepl.noteapp.api.notes;

import dev.razepl.noteapp.api.notes.data.NoteRequest;
import dev.razepl.noteapp.api.notes.data.NoteResponse;
import dev.razepl.noteapp.entities.note.Note;
import dev.razepl.noteapp.entities.note.NoteLang;
import dev.razepl.noteapp.entities.note.interfaces.NoteRepository;
import dev.razepl.noteapp.entities.user.User;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.springframework.boot.test.context.SpringBootTest;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.when;

@SpringBootTest
class NoteServiceTest {
    @InjectMocks
    private NoteServiceImpl noteService;

    @Mock
    private NoteRepository noteRepository;

    @Test
    final void test_createNewNote_shouldCreateNote() {
        // given
        String content = "content";
        String title = "title";
        long noteId = 1L;

        Note newNote = Note
                .builder()
                .content(content)
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
                .content(content)
                .title(title)
                .build();
        NoteResponse expected = NoteResponse
                .builder()
                .content(content)
                .title(title)
                .noteLang(NoteLang.TEXT)
                .noteId(noteId)
                .build();

        when(noteRepository.save(any(Note.class)))
                .thenReturn(newNote);

        // when
        NoteResponse actual = noteService.createNewNote(noteRequest, noteAuthor);

        // then
        assertEquals(expected, actual, "The created not differs from the note returned by service");
    }
}

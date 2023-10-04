package razepl.dev.noteapp.api.notes;

import razepl.dev.noteapp.api.notes.data.NoteRequest;
import razepl.dev.noteapp.api.notes.data.NoteResponse;
import razepl.dev.noteapp.api.notes.interfaces.NoteMapper;
import razepl.dev.noteapp.entities.note.Note;
import razepl.dev.noteapp.entities.note.NoteLang;
import razepl.dev.noteapp.entities.note.interfaces.NoteRepository;
import razepl.dev.noteapp.entities.user.User;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.springframework.boot.test.context.SpringBootTest;

import java.time.LocalDate;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.when;

@SpringBootTest
class NoteServiceTest {
    @InjectMocks
    private NoteServiceImpl noteService;

    @Mock
    private NoteRepository noteRepository;

    @Mock
    private NoteMapper noteMapper;

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

        when(noteMapper.toNote(noteRequest, LocalDate.now(), noteAuthor))
                .thenReturn(newNote);

        when(noteRepository.save(any(Note.class)))
                .thenReturn(newNote);

        when(noteMapper.toNoteResponse(newNote))
                .thenReturn(expected);

        // when
        NoteResponse actual = noteService.createNewNote(noteRequest, noteAuthor);

        // then
        assertEquals(expected, actual, "The created not differs from the note returned by service");
    }
}

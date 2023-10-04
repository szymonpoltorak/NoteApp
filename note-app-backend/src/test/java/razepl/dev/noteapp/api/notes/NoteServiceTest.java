package razepl.dev.noteapp.api.notes;

import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import razepl.dev.noteapp.api.notes.data.NoteResponse;
import razepl.dev.noteapp.api.notes.interfaces.NoteMapper;
import razepl.dev.noteapp.entities.note.Note;
import razepl.dev.noteapp.entities.note.interfaces.NoteRepository;
import razepl.dev.noteapp.utils.NoteTestData;
import razepl.dev.noteapp.utils.TestDataBuilder;

import java.time.LocalDate;
import java.util.List;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.when;
import static razepl.dev.noteapp.api.notes.constants.Constants.PAGE_SIZE;

@SpringBootTest
class NoteServiceTest {
    @InjectMocks
    private NoteServiceImpl noteService;

    @Mock
    private NoteRepository noteRepository;

    @Mock
    private NoteMapper noteMapper;

    private NoteTestData testData = TestDataBuilder.buildNoteTestData();

    @Test
    final void test_createNewNote_shouldCreateNote() {
        // given
        when(noteMapper.toNote(testData.noteRequest(), LocalDate.now(), testData.noteAuthor()))
                .thenReturn(testData.newNote());

        when(noteRepository.save(any(Note.class)))
                .thenReturn(testData.newNote());

        when(noteMapper.toNoteResponse(testData.newNote()))
                .thenReturn(testData.noteResponse());

        // when
        NoteResponse actual = noteService.createNewNote(testData.noteRequest(), testData.noteAuthor());

        // then
        assertEquals(testData.noteResponse(), actual, "The created not differs from the note returned by service");
    }

    @Test
    final void test_getNotesFromPage_shouldCorrectlyReturnNote() {
        // given
        final int pageNumber = 0;
        Pageable pageable = PageRequest.of(pageNumber, PAGE_SIZE);
        List<NoteResponse> expected = List.of(testData.noteResponse());

        when(noteRepository.findNotesByNoteAuthor(testData.noteAuthor(), pageable))
                .thenReturn(new PageImpl<>(List.of(testData.newNote())));
        when(noteMapper.toNoteResponse(testData.newNote()))
                .thenReturn(testData.noteResponse());

        // when
        List<NoteResponse> actual = noteService.getNotesFromPage(pageNumber, testData.noteAuthor());

        // then
        assertEquals(expected, actual, "List of notes for the user differed from the expected");
    }
}

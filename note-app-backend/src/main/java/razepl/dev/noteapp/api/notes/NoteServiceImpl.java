package razepl.dev.noteapp.api.notes;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import razepl.dev.noteapp.api.notes.data.NoteRequest;
import razepl.dev.noteapp.api.notes.data.NoteResponse;
import razepl.dev.noteapp.api.notes.interfaces.NoteMapper;
import razepl.dev.noteapp.api.notes.interfaces.NoteService;
import razepl.dev.noteapp.entities.note.Note;
import razepl.dev.noteapp.entities.note.interfaces.NoteRepository;
import razepl.dev.noteapp.entities.user.User;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.Collections;
import java.util.List;

import static razepl.dev.noteapp.api.notes.constants.Constants.PAGE_SIZE;

@Slf4j
@Service
@RequiredArgsConstructor
public class NoteServiceImpl implements NoteService {
    private final NoteRepository noteRepository;
    private final NoteMapper noteMapper;

    @Override
    public final NoteResponse createNewNote(NoteRequest noteRequest, User noteAuthor) {
        log.info("Received request with data : {}", noteRequest);
        log.info("Request is from user : {}", noteAuthor.getUsername());

        Note newNote = noteMapper.toNote(noteRequest, LocalDate.now(), noteAuthor);

        Note repoNote = noteRepository.save(newNote);

        return noteMapper.toNoteResponse(repoNote);
    }

    @Override
    public final List<NoteResponse> getNotesFromPage(int pageNumber, User notesAuthor) {
        Pageable pageable = PageRequest.of(pageNumber, PAGE_SIZE);
        Page<Note> notes = noteRepository.findNotesByNoteAuthor(notesAuthor, pageable);

        log.info("Found '{}' notes for user '{}' on page '{}'", notes.getSize(), notesAuthor.getUsername(), pageNumber);

        return notes
                .stream()
                .map(noteMapper::toNoteResponse)
                .toList();
    }
}

package razepl.dev.noteapp.api.notes;

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

@Slf4j
@Service
@RequiredArgsConstructor
public class NoteServiceImpl implements NoteService {
    private final NoteRepository noteRepository;
    private final NoteMapper noteMapper;

    @Override
    public final NoteResponse createNewNote(NoteRequest noteRequest, User noteAuthor) {
        Note newNote = noteMapper.toNote(noteRequest, LocalDate.now(), noteAuthor);

        Note repoNote = noteRepository.save(newNote);

        return noteMapper.toNoteResponse(repoNote);
    }
}

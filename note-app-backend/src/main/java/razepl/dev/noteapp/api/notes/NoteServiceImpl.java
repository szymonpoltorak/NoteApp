package razepl.dev.noteapp.api.notes;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import razepl.dev.noteapp.api.notes.data.NoteRequest;
import razepl.dev.noteapp.api.notes.data.NoteResponse;
import razepl.dev.noteapp.api.notes.interfaces.NoteMapper;
import razepl.dev.noteapp.api.notes.interfaces.NoteService;
import razepl.dev.noteapp.entities.note.Note;
import razepl.dev.noteapp.entities.note.interfaces.NoteRepository;
import razepl.dev.noteapp.entities.user.User;
import razepl.dev.noteapp.exceptions.notes.NoteDoesNotExistException;

import java.time.LocalDate;
import java.util.List;

import static razepl.dev.noteapp.api.notes.constants.Constants.PAGE_SIZE;

@Slf4j
@Service
@RequiredArgsConstructor
public class NoteServiceImpl implements NoteService {
    private static final String NOTE_ID_ERROR_MESSAGE = "Note of id '%s' does not exist!";
    private final NoteRepository noteRepository;
    private final NoteMapper noteMapper;

    @Override
    public final NoteResponse createNewNote(NoteRequest noteRequest, User noteAuthor) {
        log.info("Received request with data : {}", noteRequest);
        log.info("Request is from user : {}", noteAuthor.getUsername());

        Note newNote = Note
                .builder()
                .noteLang(noteRequest.noteLang())
                .dateOfCreation(LocalDate.now())
                .description(noteRequest.description())
                .noteAuthor(noteAuthor)
                .title(noteRequest.title())
                .build();
        Note repoNote = noteRepository.save(newNote);

        return noteMapper.toNoteResponse(repoNote);
    }

    @Override
    public final List<NoteResponse> getNotesFromPage(int pageNumber, User notesAuthor) {
        Pageable pageable = PageRequest.of(pageNumber, PAGE_SIZE);
        Page<Note> notes = noteRepository.findByNoteAuthorOrderByDateOfCreation(notesAuthor, pageable);

        log.info("Found '{}' notes for user '{}' on page '{}'", notes.getTotalElements(), notesAuthor.getUsername(), pageNumber);

        return notes
                .stream()
                .map(noteMapper::toNoteResponse)
                .toList();
    }

    @Override
    public final NoteResponse deleteNote(long noteId) {
        Note noteToDelete = noteRepository.findById(noteId)
                .orElseThrow(() -> new NoteDoesNotExistException(
                        String.format(NOTE_ID_ERROR_MESSAGE, noteId))
                );
        log.info("Deleting note : {}", noteToDelete);

        noteRepository.delete(noteToDelete);

        return noteMapper.toNoteResponse(noteToDelete);
    }

    @Override
    public final NoteResponse updateNote(NoteResponse updateData) {
        log.info("Updating with data : {}", updateData);

        Note noteToUpdate = noteRepository.findById(updateData.noteId())
                .orElseThrow(() -> new NoteDoesNotExistException(
                        String.format(NOTE_ID_ERROR_MESSAGE, updateData.noteId()))
                );
        log.info("Note to be updated : {}", noteToUpdate);

        noteToUpdate.update(updateData);

        noteRepository.save(noteToUpdate);

        return noteMapper.toNoteResponse(noteToUpdate);
    }
}

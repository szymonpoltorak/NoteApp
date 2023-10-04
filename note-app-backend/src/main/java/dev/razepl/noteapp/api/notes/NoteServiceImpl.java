package dev.razepl.noteapp.api.notes;

import dev.razepl.noteapp.api.notes.data.NoteRequest;
import dev.razepl.noteapp.api.notes.data.NoteResponse;
import dev.razepl.noteapp.api.notes.interfaces.NoteMapper;
import dev.razepl.noteapp.api.notes.interfaces.NoteService;
import dev.razepl.noteapp.entities.note.Note;
import dev.razepl.noteapp.entities.note.interfaces.NoteRepository;
import dev.razepl.noteapp.entities.user.User;
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
        Note newNote = Note
                .builder()
                .content(noteRequest.content())
                .dateOfCreation(LocalDate.now())
                .noteAuthor(noteAuthor)
                .title(noteRequest.title())
                .noteLang(noteRequest.noteLang())
                .build();
        Note repoNote = noteRepository.save(newNote);

        return noteMapper.toNoteResponse(repoNote);
    }
}

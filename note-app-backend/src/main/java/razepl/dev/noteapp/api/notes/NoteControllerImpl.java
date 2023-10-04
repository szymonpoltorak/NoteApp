package razepl.dev.noteapp.api.notes;

import lombok.RequiredArgsConstructor;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import razepl.dev.noteapp.api.notes.data.NoteRequest;
import razepl.dev.noteapp.api.notes.data.NoteResponse;
import razepl.dev.noteapp.api.notes.interfaces.NoteController;
import razepl.dev.noteapp.api.notes.interfaces.NoteService;
import razepl.dev.noteapp.entities.user.User;

import static razepl.dev.noteapp.api.notes.constants.NoteMappings.CREATE_NOTE_MAPPING;
import static razepl.dev.noteapp.api.notes.constants.NoteMappings.NOTE_ENDPOINTS_MAPPING;

@RestController
@RequestMapping(value = NOTE_ENDPOINTS_MAPPING)
@RequiredArgsConstructor
public class NoteControllerImpl implements NoteController {
    private final NoteService noteService;

    @Override
    @PostMapping(value = CREATE_NOTE_MAPPING)
    public final NoteResponse createNewNote(@RequestBody NoteRequest noteRequest,
                                            @AuthenticationPrincipal User noteAuthor) {
        return noteService.createNewNote(noteRequest, noteAuthor);
    }
}

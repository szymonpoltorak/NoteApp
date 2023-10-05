package razepl.dev.noteapp.api.notes;

import lombok.RequiredArgsConstructor;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import razepl.dev.noteapp.api.notes.data.NoteRequest;
import razepl.dev.noteapp.api.notes.data.NoteResponse;
import razepl.dev.noteapp.api.notes.interfaces.NoteController;
import razepl.dev.noteapp.api.notes.interfaces.NoteService;
import razepl.dev.noteapp.entities.user.User;

import java.util.List;

import static razepl.dev.noteapp.api.notes.constants.NoteMappings.CREATE_NOTE_MAPPING;
import static razepl.dev.noteapp.api.notes.constants.NoteMappings.DELETE_NOTE_MAPPING;
import static razepl.dev.noteapp.api.notes.constants.NoteMappings.GET_NOTES_MAPPING;
import static razepl.dev.noteapp.api.notes.constants.NoteMappings.NOTE_ENDPOINTS_MAPPING;
import static razepl.dev.noteapp.api.notes.constants.NoteMappings.UPDATE_NOTE_MAPPING;

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

    @Override
    @GetMapping(value = GET_NOTES_MAPPING)
    public final List<NoteResponse> getNotesFromPage(@RequestParam int pageNumber,
                                                     @AuthenticationPrincipal User notesAuthor) {
        return noteService.getNotesFromPage(pageNumber, notesAuthor);
    }

    @Override
    @DeleteMapping(value = DELETE_NOTE_MAPPING)
    public final NoteResponse deleteNote(@RequestParam long noteId) {
        return noteService.deleteNote(noteId);
    }

    @Override
    @PatchMapping(value = UPDATE_NOTE_MAPPING)
    public final NoteResponse updateNote(@RequestBody NoteResponse updateData) {
        return noteService.updateNote(updateData);
    }
}

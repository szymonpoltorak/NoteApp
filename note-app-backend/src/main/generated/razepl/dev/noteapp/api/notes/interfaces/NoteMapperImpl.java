package razepl.dev.noteapp.api.notes.interfaces;

import java.time.LocalDate;
import javax.annotation.processing.Generated;
import org.springframework.stereotype.Component;
import razepl.dev.noteapp.api.notes.data.NoteRequest;
import razepl.dev.noteapp.api.notes.data.NoteResponse;
import razepl.dev.noteapp.entities.note.Note;
import razepl.dev.noteapp.entities.user.User;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2023-10-04T15:44:27+0200",
    comments = "version: 1.5.5.Final, compiler: javac, environment: Java 17.0.8.1 (Private Build)"
)
@Component
public class NoteMapperImpl implements NoteMapper {

    @Override
    public NoteResponse toNoteResponse(Note note) {
        if ( note == null ) {
            return null;
        }

        NoteResponse.NoteResponseBuilder noteResponse = NoteResponse.builder();

        noteResponse.content( note.getContent() );
        noteResponse.title( note.getTitle() );
        noteResponse.noteId( note.getNoteId() );
        noteResponse.noteLang( note.getNoteLang() );

        return noteResponse.build();
    }

    @Override
    public Note toNote(NoteRequest noteRequest, LocalDate dateOfCreation, User noteAuthor) {
        if ( noteRequest == null && dateOfCreation == null && noteAuthor == null ) {
            return null;
        }

        Note.NoteBuilder note = Note.builder();

        if ( noteRequest != null ) {
            note.content( noteRequest.content() );
            note.title( noteRequest.title() );
            note.noteLang( noteRequest.noteLang() );
        }
        note.dateOfCreation( dateOfCreation );
        note.noteAuthor( noteAuthor );

        return note.build();
    }
}

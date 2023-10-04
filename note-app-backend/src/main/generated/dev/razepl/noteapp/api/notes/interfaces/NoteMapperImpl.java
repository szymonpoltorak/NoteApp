package dev.razepl.noteapp.api.notes.interfaces;

import dev.razepl.noteapp.api.notes.data.NoteResponse;
import dev.razepl.noteapp.entities.note.Note;
import javax.annotation.processing.Generated;
import org.springframework.stereotype.Component;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2023-10-04T13:05:07+0200",
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
}

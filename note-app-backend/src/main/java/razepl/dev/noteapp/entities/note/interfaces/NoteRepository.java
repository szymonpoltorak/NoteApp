package razepl.dev.noteapp.entities.note.interfaces;

import razepl.dev.noteapp.entities.note.Note;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface NoteRepository extends JpaRepository<Note, Long> {
}

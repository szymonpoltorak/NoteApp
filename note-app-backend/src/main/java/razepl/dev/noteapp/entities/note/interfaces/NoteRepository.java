package razepl.dev.noteapp.entities.note.interfaces;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import razepl.dev.noteapp.entities.note.Note;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import razepl.dev.noteapp.entities.user.User;

@Repository
public interface NoteRepository extends JpaRepository<Note, Long> {
    Page<Note> findNotesByNoteAuthor(User noteAuthor, Pageable pageable);
}

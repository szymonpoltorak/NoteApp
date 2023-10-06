package razepl.dev.noteapp.entities.note;

import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import razepl.dev.noteapp.api.notes.data.NoteResponse;
import razepl.dev.noteapp.entities.note.interfaces.Updatable;
import razepl.dev.noteapp.entities.user.User;

import java.time.LocalDate;

@Builder
@Data
@Entity
@Table(name = "Notes")
@NoArgsConstructor
@AllArgsConstructor
public class Note implements Updatable<NoteResponse> {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long noteId;

    @ManyToOne
    @JoinColumn(name = "userId")
    private User noteAuthor;

    private String content;

    private String title;

    private LocalDate dateOfCreation;

    @Enumerated(EnumType.STRING)
    private NoteLang noteLang;

    @Override
    public final void update(NoteResponse updateData) {
        this.content = updateData.content();
        this.title = updateData.title();
        this.noteLang = updateData.noteLang();
    }
}

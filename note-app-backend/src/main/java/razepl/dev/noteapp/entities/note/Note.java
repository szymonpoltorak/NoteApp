package razepl.dev.noteapp.entities.note;

import razepl.dev.noteapp.entities.user.User;
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

import java.time.LocalDate;

@Builder
@Data
@Entity
@Table(name = "Notes")
@NoArgsConstructor
@AllArgsConstructor
public class Note {
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
}

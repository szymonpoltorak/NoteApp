package razepl.dev.noteapp.entities.note;

import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.datatype.jsr310.deser.LocalDateDeserializer;
import com.fasterxml.jackson.datatype.jsr310.ser.LocalDateSerializer;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.format.annotation.DateTimeFormat;
import razepl.dev.noteapp.api.notes.data.NoteResponse;
import razepl.dev.noteapp.entities.note.interfaces.Updatable;
import razepl.dev.noteapp.entities.user.User;

import java.time.LocalDate;

import static razepl.dev.noteapp.entities.note.constants.NoteNames.NOTE_ID_COLUMN;
import static razepl.dev.noteapp.entities.note.constants.NoteNames.NOTE_TABLE_NAME;
import static razepl.dev.noteapp.entities.note.constants.NoteSizeBonds.NOTE_MAX_DESCRIPTION_SIZE;
import static razepl.dev.noteapp.entities.note.constants.NoteSizeBonds.NOTE_MIN_DESCRIPTION_SIZE;
import static razepl.dev.noteapp.entities.note.constants.NoteSizeBonds.NOTE_TITLE_MAX_SIZE;
import static razepl.dev.noteapp.entities.note.constants.NoteSizeBonds.NOTE_TITLE_MIN_SIZE;
import static razepl.dev.noteapp.entities.user.constants.UserValidation.DATE_PATTERN;

@Builder
@Data
@Entity
@Table(name = NOTE_TABLE_NAME)
@NoArgsConstructor
@AllArgsConstructor
public class Note implements Updatable<NoteResponse> {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long noteId;

    @ManyToOne
    @JoinColumn(name = NOTE_ID_COLUMN)
    private User noteAuthor;

    @NotNull
    @Size(min = NOTE_MIN_DESCRIPTION_SIZE, max = NOTE_MAX_DESCRIPTION_SIZE)
    private String description;

    @NotNull
    @Size(min = NOTE_TITLE_MIN_SIZE, max = NOTE_TITLE_MAX_SIZE)
    private String title;

    @DateTimeFormat(pattern = DATE_PATTERN)
    @JsonSerialize(using = LocalDateSerializer.class)
    @JsonDeserialize(using = LocalDateDeserializer.class)
    private LocalDate dateOfCreation;

    @NotNull
    @Enumerated(EnumType.STRING)
    private NoteLang noteLang;

    @Override
    public final void update(NoteResponse updateData) {
        this.description = updateData.description();
        this.title = updateData.title();
        this.noteLang = updateData.noteLang();
    }
}

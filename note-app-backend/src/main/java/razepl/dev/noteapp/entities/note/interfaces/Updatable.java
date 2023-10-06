package razepl.dev.noteapp.entities.note.interfaces;

@FunctionalInterface
public interface Updatable<T> {
    void update(T updateData);
}

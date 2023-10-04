package razepl.dev.noteapp.entities.user.constants;

public final class UserValidation {
    public static final int NAME_MIN_LENGTH = 3;

    public static final String DATE_PATTERN = "MM-dd-yyyy";

    public static final int NAME_MAX_LENGTH = 20;

    public static final String NAME_PATTERN = "[a-zA-ZżźćńółęąśŻŹĆĄŚĘŁÓŃ]+";

    private UserValidation() {
    }
}

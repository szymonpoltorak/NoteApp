package dev.razepl.noteapp.config.constants;

public final class Matchers {
    public static final String AUTH_MAPPING = "/auth/";

    public static final String LOGOUT_URL = "/api/auth/logout";

    private static final String AUTH_MATCHERS = "/api/auth/**";

    public static final String[] WHITE_LIST = {AUTH_MATCHERS, LOGOUT_URL};

    private Matchers() {
    }
}

package razepl.dev.noteapp.config.interfaces;

import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.web.SecurityFilterChain;

public interface SecurityConfiguration {
    SecurityFilterChain securityFilterChain(HttpSecurity httpSecurity) throws Exception;
}

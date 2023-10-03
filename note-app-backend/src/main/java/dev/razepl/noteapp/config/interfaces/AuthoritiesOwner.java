package dev.razepl.noteapp.config.interfaces;

import org.springframework.security.core.authority.SimpleGrantedAuthority;

import java.util.List;

public interface AuthoritiesOwner {
    List<SimpleGrantedAuthority> getAuthorities();
}

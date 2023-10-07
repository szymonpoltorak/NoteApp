package razepl.dev.noteapp.entities.user.interfaces;

import org.springframework.security.core.userdetails.UserDetails;


public interface ServiceUser extends UserDetails {
    long getUserId();

    int getAge();

    String getFullName();
}

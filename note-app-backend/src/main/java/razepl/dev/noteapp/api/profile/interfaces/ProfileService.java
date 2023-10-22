package razepl.dev.noteapp.api.profile.interfaces;

import razepl.dev.noteapp.api.profile.data.UserResponse;
import razepl.dev.noteapp.entities.user.User;

public interface ProfileService {
    UserResponse getUserData(User user);
}

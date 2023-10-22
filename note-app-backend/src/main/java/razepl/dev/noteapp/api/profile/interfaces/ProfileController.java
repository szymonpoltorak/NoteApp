package razepl.dev.noteapp.api.profile.interfaces;

import razepl.dev.noteapp.api.profile.data.UserResponse;
import razepl.dev.noteapp.entities.user.User;

public interface ProfileController {
    UserResponse getUserData(User user);

    UserResponse closeUsersAccount(User user);
}

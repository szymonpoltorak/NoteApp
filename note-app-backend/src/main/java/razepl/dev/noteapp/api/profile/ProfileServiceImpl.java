package razepl.dev.noteapp.api.profile;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import razepl.dev.noteapp.api.profile.data.UserResponse;
import razepl.dev.noteapp.api.profile.interfaces.ProfileService;
import razepl.dev.noteapp.api.profile.interfaces.UserMapper;
import razepl.dev.noteapp.entities.user.User;

@Slf4j
@Service
@RequiredArgsConstructor
public class ProfileServiceImpl implements ProfileService {
    private final UserMapper userMapper;

    @Override
    public final UserResponse getUserData(User user) {
        log.info("Getting data from user : {}", user);

        return userMapper.toUserResponse(user);
    }
}

package razepl.dev.noteapp.api.profile;

import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import razepl.dev.noteapp.api.profile.data.UserResponse;
import razepl.dev.noteapp.api.profile.interfaces.ProfileService;
import razepl.dev.noteapp.api.profile.interfaces.UserMapper;
import razepl.dev.noteapp.entities.token.interfaces.TokenRepository;
import razepl.dev.noteapp.entities.user.User;
import razepl.dev.noteapp.entities.user.interfaces.UserRepository;

@Slf4j
@Service
@Transactional
@RequiredArgsConstructor
public class ProfileServiceImpl implements ProfileService {
    private final UserMapper userMapper;
    private final UserRepository userRepository;
    private final TokenRepository tokenRepository;

    @Override
    public UserResponse getUserData(User user) {
        log.info("Getting data from user : {}", user);

        log.info(String.valueOf(userMapper == null));

        return userMapper.toUserResponse(user);
    }

    @Override
    public UserResponse closeUsersAccount(User user) {
        log.info("Closing account of user : {}", user);

        tokenRepository.deleteAllByUser(user);

        log.info("Deleted all user tokens.");

        userRepository.delete(user);

        return userMapper.toUserResponse(user);
    }
}

package razepl.dev.noteapp.api.profile.interfaces;

import org.mapstruct.Mapper;
import razepl.dev.noteapp.api.profile.data.UserResponse;
import razepl.dev.noteapp.entities.user.User;

@FunctionalInterface
@Mapper(componentModel = "spring")
public interface UserMapper {
    UserResponse toUserResponse(User user);
}

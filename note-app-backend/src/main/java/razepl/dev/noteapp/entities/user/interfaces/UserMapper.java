package razepl.dev.noteapp.entities.user.interfaces;

import org.mapstruct.Mapper;
import razepl.dev.noteapp.api.auth.data.RegisterRequest;
import razepl.dev.noteapp.entities.user.User;

@FunctionalInterface
@Mapper(componentModel = "spring")
public interface UserMapper {
    User toUser(RegisterRequest registerRequest, String password);
}

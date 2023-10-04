package razepl.dev.noteapp.entities.user.interfaces;

import javax.annotation.processing.Generated;
import org.springframework.stereotype.Component;
import razepl.dev.noteapp.api.auth.data.RegisterRequest;
import razepl.dev.noteapp.entities.user.User;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2023-10-04T16:17:55+0200",
    comments = "version: 1.5.5.Final, compiler: javac, environment: Java 17.0.8.1 (Private Build)"
)
@Component
public class UserMapperImpl implements UserMapper {

    @Override
    public User toUser(RegisterRequest registerRequest, String password) {
        if ( registerRequest == null && password == null ) {
            return null;
        }

        User.UserBuilder user = User.builder();

        if ( registerRequest != null ) {
            user.dateOfBirth( registerRequest.dateOfBirth() );
            user.name( registerRequest.name() );
            user.surname( registerRequest.surname() );
            user.username( registerRequest.username() );
            user.password( registerRequest.password() );
        }

        return user.build();
    }
}

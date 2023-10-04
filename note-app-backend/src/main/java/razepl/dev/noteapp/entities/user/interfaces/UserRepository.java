package razepl.dev.noteapp.entities.user.interfaces;

import razepl.dev.noteapp.entities.user.User;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {
    Optional<User> findByUsername(String username);

    @Query("select u from User as u inner join JwtToken as t on u.userId = t.user.userId where t.token = :authToken")
    Optional<User> findUserByToken(String authToken);
}

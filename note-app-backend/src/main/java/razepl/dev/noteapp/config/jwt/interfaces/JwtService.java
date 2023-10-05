package razepl.dev.noteapp.config.jwt.interfaces;

import io.jsonwebtoken.Claims;
import jakarta.servlet.http.HttpServletRequest;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.Map;
import java.util.function.Function;

public interface JwtService {
    String getUsernameFromToken(String jwtToken);

    <T> T getClaimFromToken(String jwtToken, Function<Claims, T> claimsHandler);

    String generateToken(UserDetails userDetails);

    String generateToken(Map<String, Object> additionalClaims, UserDetails userDetails, long expiration);

    boolean isTokenValid(String jwtToken, UserDetails userDetails);

    String getJwtToken(HttpServletRequest request);

    String generateRefreshToken(UserDetails userDetails);

    String getJwtRefreshToken(HttpServletRequest request);
}

FROM maven:3.9.0-eclipse-temurin-17-alpine

WORKDIR /home/note-app

COPY pom.xml .

COPY src/ src/

EXPOSE 8080

ENTRYPOINT ["mvn", "clean", "spring-boot:run"]

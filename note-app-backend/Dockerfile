FROM gradle:8.2-jdk17-alpine

WORKDIR /home/note-app

COPY pom.xml .

COPY src/ src/

EXPOSE 8080

ENTRYPOINT ["gradle", "bootRun"]

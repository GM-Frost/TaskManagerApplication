FROM maven:3.8.3-openjdk-17 AS build
WORKDIR /user
COPY . .
RUN mvn clean package -DskipTests

FROM openjdk:17.0.1-jdk-slim
WORKDIR /user
COPY --from=build /user/target/user-0.0.1-SNAPSHOT.jar user.jar
EXPOSE 8080
ENTRYPOINT ["java", "-jar", "user.jar"]

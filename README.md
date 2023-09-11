# Full Stack Todo Application

This is a full-stack Todo application developed using React with Vite (TypeScript) for the frontend and Java for the backend. The application allows users to manage their tasks with proper authentication, task creation, editing, and deletion functionalities.


![Untitled](https://github.com/GM-Frost/TaskManagerApplication/assets/110303752/e8ee9e9c-c39e-40ba-bddd-bb305247d5a7)

# Table of Contents

- Features
- Frontend
- Backend
- Additional Considerations

## Features

- User Registration and Login with form validation and secure authentication.
- User Dashboard displaying a list of tasks.
- Task Management with the ability to create, edit, and delete tasks.
- Responsive UI for various devices.
- Input validation and sanitization for security.
- Error handling and meaningful error messages.
- Optional JWT token-based authentication middleware.
- Secure password storage.

## Frontend

### Technologies Used

- React
- Vite
- TypeScript
- Material-UI & TailwindCss

### User Dashboard

- Display a list of tasks retrieved from the backend.
- Implement a logout button.
- Implement Add Tasks
- Implement View Tasks

![Untitled](https://github.com/GM-Frost/TaskManagerApplication/assets/110303752/ae80698e-eaeb-480d-84b3-01c5424f2d2c)


### Task Management

- Create a form to add a new task with a title, description, and optional due date.
- Implement an edit feature to modify task details.
- Allow users to delete tasks.

![Untitled](https://github.com/GM-Frost/TaskManagerApplication/assets/110303752/6363af84-05f9-4702-ba9d-895a85a02829)

![Untitled](https://github.com/GM-Frost/TaskManagerApplication/assets/110303752/3c034931-4fc3-49e4-b415-dd9d75445dc3)

![Untitled](https://github.com/GM-Frost/TaskManagerApplication/assets/110303752/cae24ec5-0714-41f0-a8ed-47324a98bf34)

![Untitled](https://github.com/GM-Frost/TaskManagerApplication/assets/110303752/29bfab94-14b5-436e-81ee-c1692ddf5e01)


## Backend

### Technologies Used

- Java
- Spring Boot
- Non-Relational Database: MongoDb

### User Authentication

- Implement user registration and securely store user information in a database.
- Use password hashing for security.
- Implement a login mechanism using JWT tokens.

### Task API

- Design and implement RESTful API endpoints for CRUD operations on tasks.
- Implement authorization to ensure only authenticated users can access and modify tasks.



### Database

- Use a relational database/Non-relational Database: Here its using MongoDb.
- Design the database schema to effectively store user data and tasks.

### Authentication Middleware

- Create middleware to validate JWT tokens for protected API routes

## Additional Considerations

### User Experience

- Implement a responsive UI for various devices.
- Provide feedback messages for user actions.
- Ensure a smooth and intuitive user experience.

### Security

- Implement input validation and sanitize user inputs to prevent vulnerabilities.
- Use secure authentication methods and store passwords securely.

### Error Handling

- Handle errors gracefully on both frontend and backend.
- Provide meaningful error messages to users.

# Full Stack Todo Application

This is a full-stack Todo application developed using React with Vite (TypeScript) for the frontend and Java for the backend. The application allows users to manage their tasks with proper authentication, task creation, editing, and deletion functionalities.

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

### Task Management

- Create a form to add a new task with a title, description, and optional due date.
- Implement an edit feature to modify task details.
- Allow users to delete tasks.

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

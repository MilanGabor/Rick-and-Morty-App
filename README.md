# Rick and Morty API App

This application is a containerized frontend-backend project that interacts with the Rick and Morty API. You can browse all characters and click on them to view more details.

## Table of Contents

- [Project Description](#project-description)
- [Technologies Used](#technologies-used)
- [Setup Instructions](#setup-instructions)
- [Usage](#usage)
- [Outro](#outro)

## Project Description

This project is divided into two main parts:

- **Frontend**: A React application that displays a list of characters from the Rick and Morty API. Users can click on a character to view more details.
- **Backend**: An Express.js server that serves as an intermediary between the frontend and the Rick and Morty API.

Both parts are containerized using Docker and can be easily set up and run using Docker Compose.

## Technologies Used

- **Frontend**: React, TypeScript
- **Backend**: Node.js, Express, TypeScript
- **Containerization**: Docker, Docker Compose

## Setup Instructions

### Prerequisites

- Docker and Docker Compose installed on your machine.
- Node.js and npm (for local development without Docker).

### Cloning the Repository

```bash
git clone https://github.com/MilanGabor/Rick-and-Morty-App.git
cd Rick-and-Morty-App
```

### Building and Running with Docker

**Development**: To run the application in development mode:
  ```
  docker-compose -f docker-compose.dev.yml up --build
  ```
**Production**: To run the application in production mode:
  ```
  docker-compose up --build
  ```

## Usage

Frontend: Access the frontend at http://localhost:3000. You can browse all characters and click on them to view more details.
Backend: The backend runs on http://localhost:80 and serves API requests from the frontend.

## Endpoints
- Frontend: http://localhost:3000
- Backend: http://localhost:80/api

## Outro

Thank you for checking out my Rick and Morty API App! I hope you find it useful and enjoyable. Happy coding!


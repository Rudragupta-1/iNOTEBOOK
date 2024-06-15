# iNotebook: Notes on Cloud

## Overview

iNotebook is a cloud-based note-taking application built using the MERN stack (MongoDB, Express, React, Node.js). The project provides a full-fledged environment for users to create, read, update, and delete their notes. Authentication and authorization are handled using JWT tokens to ensure data security and privacy.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Backend Setup](#backend-setup)
- [Frontend Setup](#frontend-setup)
- [Project Structure](#project-structure)
- [Usage](#usage)
- [Routes and Schemas](#routes-and-schemas)
- [Contributing](#contributing)
- [License](#license)

## Features

- User authentication (signup, login, logout)
- Password hashing with bcrypt
- JWT-based authorization
- CRUD operations for notes
- Responsive design with React
- Context API for state management
- Frontend validation
- Alerts for user actions

## Technologies Used

- **Frontend:** React, Context API, Bootstrap, FontAwesome
- **Backend:** Node.js, Express, MongoDB, Mongoose, bcryptjs, express-validator, JWT
- **Tools:** ThunderClient for API testing

## Prerequisites

- Node.js and npm installed
- MongoDB installed and running
- Basic knowledge of JavaScript, React, and Node.js

## Installation

1. Clone the repository
   ```bash
   git clone https://github.com/your-username/iNotebook.git
   cd iNotebook
   ```

## Backend Setup

1. Navigate to the backend directory
   ```bash
   cd backend
   ```

2. Install dependencies
   ```bash
   npm install
   ```

3. Set up environment variables
   Create a `.env` file in the `backend` directory and add the following:
   ```env
   MONGO_URI=your_mongo_connection_string
   JWT_SECRET=your_jwt_secret
   ```

4. Run the server
   ```bash
   npm start
   ```

## Frontend Setup

1. Navigate to the frontend directory
   ```bash
   cd frontend
   ```

2. Install dependencies
   ```bash
   npm install
   ```

3. Run the React app
   ```bash
   npm start
   ```

## Project Structure

```
iNotebook/
├── backend/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── .env
│   ├── server.js
│   └── package.json
├── frontend/
│   ├── public/
│   ├── src/
│   ├── .env
│   ├── package.json
│   └── README.md
└── README.md
```

## Usage

1. **Register a new user** by navigating to the signup page.
2. **Login** with your credentials.
3. **Create a new note** using the add note form.
4. **View all notes** on your dashboard.
5. **Update or delete notes** using the respective options on each note.

## Routes and Schemas

### User Routes
- **POST /api/auth/createuser:** Register a new user
- **POST /api/auth/login:** Login a user
- **POST /api/auth/getuser:** Get logged-in user details

### Note Routes
- **GET /api/notes/fetchallnotes:** Get all notes of the logged-in user
- **POST /api/notes/addnote:** Add a new note
- **PUT /api/notes/updatenote/:id:** Update an existing note
- **DELETE /api/notes/deletenote/:id:** Delete a note

### Schemas
- **User Schema**
  ```javascript
  const UserSchema = new Schema({
      name: { type: String, required: true },
      email: { type: String, required: true, unique: true },
      password: { type: String, required: true },
      date: { type: Date, default: Date.now }
  });
  ```

- **Note Schema**
  ```javascript
  const NoteSchema = new Schema({
      user: { type: mongoose.Schema.Types.ObjectId, ref: 'user' },
      title: { type: String, required: true },
      description: { type: String, required: true },
      tag: { type: String, default: 'General' },
      date: { type: Date, default: Date.now }
  });
  ```

## Contributing

Contributions are welcome! Please fork the repository and create a pull request with your changes.

## License

This project is licensed under the MIT License.

---

For any further questions or help, feel free to contact the repository owner. Happy coding!

# IBA Carpool Web App

## High-Level Description

This is a full-stack carpooling web application designed for IBA students and staff. The platform allows users to sign up, log in, create and book rides, view ride history, and manage their profiles. The system ensures secure authentication and data management using JWT and MongoDB.

## Tech Stack

- **Frontend:** React (with Vite), React Router, Axios, CSS
- **Backend:** Node.js, Express.js, Mongoose, JWT, bcrypt
- **Database:** MongoDB
- **Tools:** Vite, ESLint, Nodemon, dotenv, CORS

## Features

- User authentication (signup, login, password reset)
- Profile management
- Create, list, and book rides
- View active bookings and ride history
- Responsive UI with sidebar navigation

## Development Process

1. **Backend:** Designed RESTful APIs using Express and Mongoose, implemented authentication and ride management logic, and connected to MongoDB.
2. **Frontend:** Built modular React components for each screen, integrated with backend APIs via Axios, and styled using CSS for a responsive experience.
3. **Testing:** Used browser dev tools and MongoDB Compass to verify API responses and data storage.
4. **Deployment:** Configured Vite for frontend development and Nodemon for backend hot-reloading.

## How to Run

1. Start MongoDB server.
2. Run backend:  
   ```bash
   cd Backend
   npm install
   npm run dev
   ```
3. Run frontend:  
   ```bash
   cd Frontend/carpool
   npm install
   npm run dev
   ```
4. Open [http://localhost:5000](http://localhost:5000) in your browser.

---


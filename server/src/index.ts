import express from 'express';
import expressSession from "express-session";
import cors from 'cors';
import dotenv from 'dotenv';
import userRoutes from './routers/userRouter';

dotenv.config();

declare module "express-session" {
  interface SessionData {
    userId: number;
  }
}

const sessionMiddleware = expressSession({
  secret: "Tecky Academy teaches typescript",
  resave: true,
  saveUninitialized: true,
});

const app = express();
const PORT = process.env.PORT || 3000;

app.use(sessionMiddleware);
app.use(express.json());

app.use(cors({
  origin: [
    'http://localhost:3000',
    'http://192.168.1.XXX:3000', // Your computer's IP
    'exp://192.168.1.XXX:19000'  // Expo development server
  ]
}));

app.use(express.json());

// app.get('/api/user/:id', async (req, res) => {
//   // Fetch user from database
//   res.json({ id: 1, email: 'test@example.com', name: 'Test User' });
// });
app.use(userRoutes);
// app.get('/api/health', (req, res) => {
//   res.json({ status: 'Server is running!' });
// });

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import userRoutes from './routes/user.routes';
import taskRoutes from './routes/task.routes';
import { apiLimiter } from './middlewares/rateLimit';
import statusMonitor from 'express-status-monitor';
import prisma from './prisma/client';

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());
app.use(apiLimiter);
app.use(statusMonitor());

app.use('/api/users', userRoutes);
app.use('/api/tasks', taskRoutes);

app.use((req, res) => {
  res.status(404).json({ message: 'Route not found' });
});

async function startServer() {
  try {
    await prisma.$connect();
    console.log('Connected to MongoDB via Prisma');
  } catch (err) {
    console.error('Failed to connect to database:', err);
    process.exit(1);
  }
}

startServer();

export default app;

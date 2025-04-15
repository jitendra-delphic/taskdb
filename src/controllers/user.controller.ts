import { Request, Response } from 'express';
import bcrypt from 'bcrypt';
import prisma from '../prisma/client';
import { generateToken } from '../utils/jwt';

export const register = async (req: Request, res: Response): Promise<Response> => {
  const { name, email, password } = req.body;

  const existing = await prisma.user.findUnique({ where: { email } });
  if (existing) {
    return res.status(400).json({ error: 'Email already in use' });
  }

  const hashed = await bcrypt.hash(password, 10);
  const user = await prisma.user.create({
    data: { name, email, password: hashed }
  });

  const token = generateToken(user?.id);
  return res.status(201).json({ token });
};

export const login = async (req: Request, res: Response): Promise<Response> => {
  const { email, password } = req.body;

  const user = await prisma.user.findUnique({ where: { email } });
  if (!user) {
    return res.status(400).json({ error: 'Invalid email or password' });
  }

  const match = await bcrypt.compare(password, user.password);
  if (!match) {
    return res.status(400).json({ error: 'Invalid email or password' });
  }

  const token = generateToken(user.id);
  return res.status(200).json({ token });
};

export const resetPassword = async (req: Request, res: Response): Promise<Response> => {
  const { email, newPassword } = req.body;

  const user = await prisma.user.findUnique({ where: { email } });
  if (!user) {
    return res.status(404).json({ error: 'User not found' });
  }

  const hashed = await bcrypt.hash(newPassword, 10);
  await prisma.user.update({
    where: { email },
    data: { password: hashed }
  });

  return res.status(200).json({ message: 'Password reset successful' });
};

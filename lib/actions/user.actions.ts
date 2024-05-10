'use server';
import { db } from '@/drizzle';
import { users } from '@/drizzle/schema/schema';
import { eq } from 'drizzle-orm';
import { revalidatePath } from 'next/cache';
import { handlingErrorMessage } from '../utils';

export type User = typeof users.$inferInsert;

interface UpdateUserParams {
  userId: string;
  username: string;
  name: string;
  bio: string;
  path: string;
}

export async function updateUser({
  userId,
  username,
  name,
  bio,
  path,
}: UpdateUserParams): Promise<void> {
  try {
    await db
      .insert(users)
      .values({
        id: userId,
        name,
        username: username.toLowerCase(),
        bio,
        onboarded: true,
      })
      .onConflictDoUpdate({
        target: users.id,
        set: {
          name,
          username: username.toLowerCase(),
          bio,
          onboarded: true,
        },
      });

    if (path === '/profile/edit') {
      revalidatePath(path);
    }
  } catch (error) {
    handlingErrorMessage(error, 'Failed to create/update user');
  }
}

export async function getUserById(userId: string): Promise<User | undefined> {
  try {
    const user = await db.select().from(users).where(eq(users.id, userId));
    return user[0];
  } catch (error) {
    handlingErrorMessage(error, `Failed to fetch user with id --> ${userId}`);
  }
}

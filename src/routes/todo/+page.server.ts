import type { PageServerLoad } from './$types';
import { prisma } from '$lib/server/db/connection';

export const load: PageServerLoad = async () => {
  const todoList = await prisma.todo.findMany();

  return {
    todoList
  };
};

import { json } from '@sveltejs/kit';
import { prisma } from '$lib/server/db/connection';

export async function GET() {
  const todoItem = await prisma.todo.findMany();

  return json({ status: true, content: todoItem }, { status: 200 });
}

export async function POST({ request }) {
  const { user, content } = await request.json();

  const todoItem = await prisma.todo.create({
    data: { user: String(user), content }
  });

  return json({ status: true, content: todoItem }, { status: 200 });
}

export async function PUT({ request }) {
  const { id, content } = await request.json();

  await prisma.todo.update({
    where: {
      id: id
    },
    data: {
      content
    }
  });

  return json({ status: true, content: [] }, { status: 200 });
}

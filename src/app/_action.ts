"use server";

import { createTodo, deleteTodo, updateTodo } from "../../lib/auditResult-db";
import { revalidatePath } from "next/cache";

/**
 * Server Action: Create a new todo.
 */
export async function createTodoAction({
  title,
  path,
}: {
  title: string;
  path: string;
}) {
  await createTodo(title);
  revalidatePath(path);
}

/**
 * Server Action: Update an existing todo.
 */
export async function updateTodoAction(
  id: string,
  update: { tilte?: string; completed?: boolean },
  path: string
) {
  await updateTodo(id, update);
  revalidatePath(path);
}

/**
 * Server Action: Delete a todo.
 */
export async function deleteTodoAction({
  id,
  path,
}: {
  id: string;
  path: string;
}) {
  await deleteTodo(id);
  revalidatePath(path);
}

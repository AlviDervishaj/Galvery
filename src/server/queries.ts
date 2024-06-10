import { auth } from "@clerk/nextjs/server";
import "server-only";
import { db } from "~/server/db";

/**
 * Get only authenticated user images.
* */
export async function getMyImages() {

  // Auth call
  const user = auth();

  if (!user.userId) throw new Error("Unauthorized");

  const images = await db.query.images.findMany({
    where: (model, { eq }) => eq(model.userId, user.userId),
    orderBy: (model, { desc }) => desc(model.id),
  });

  return images;
}


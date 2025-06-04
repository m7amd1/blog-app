"use server";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { prisma } from "./utils/db";
import { redirect } from "next/navigation";

export const handleSubmission = async (formData: FormData) => {
  // get the values from the inputs using name property
  const title = formData.get("title");
  const content = formData.get("content");
  const imageUrl = formData.get("imageUrl");

  // its an promise so we need to await the response
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  if (!user) {
    return redirect("/api/auth/register");
  }

  await prisma.blogPost.create({
    data: {
      title: title as string,
      content: content as string,
      imageUrl: imageUrl as string,
      authorId: user.id,
      authorName: user.given_name as string,
      authorImage: user.picture as string,
    },
  });

  return redirect("/dashboard");
};

import { clerkClient } from "@clerk/nextjs/server";
import Image from "next/image";
import { getImage } from "~/server/queries";

export async function FullPageImageView({ id }: { id: number }) {
  const image = await getImage(id);
  const uploaderInfo = await clerkClient.users.getUser(image.userId);
  return (
    <div className="w-full h-full min-w-0 flex flex-row">
      <div className="w-8/12 h-full flex flex-shrink items-center justify-center relative">
        <Image src={image.url} alt={image.name} loading="lazy" className="flex-shrink object-contain" fill />
      </div>
      <div className="flex w-4/12 h-full flex-shrink-0 flex-col border-l border-white gap-2">
        <h5 className="border-b text-center text-xl font-bold p-2 capitalize">{image.name}</h5>
        <div className="flex flex-row p-2">
          <span>Uploaded By </span>
          <span className="font-bold pl-1">{uploaderInfo.fullName}</span>
        </div>
        <div className="flex flex-row p-2">
          <span>Created On </span>
          <span className="font-bold pl-1">{new Date(image.createdAt).toLocaleDateString()}</span>
        </div>
      </div>
    </div>
  )
}

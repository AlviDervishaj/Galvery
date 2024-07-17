import { clerkClient } from "@clerk/nextjs/server";
import Image from "next/image";
import { getImage } from "~/server/queries";
import { CloseModalButton } from "./CloseModalButton";

export async function FullPageImageView({ id }: { id: number }) {
  const image = await getImage(id);
  const uploaderInfo = await clerkClient().users.getUser(image.userId);

  return (
    <div className="w-full h-full flex md:flex-row flex-col items-center content-center justify-start">
      <div className="w-[80dvw] px-4 mx-auto self-center h-[80dvh] flex flex-shrink items-center justify-center relative">
        <Image
          src={image.url}
          alt={image.name}
          className="object-contain"
          loading="lazy"
          fill
        />
        <CloseModalButton />
      </div>
      <div className="absolute bottom-0 left-0 md:relative md:bottom-0 backdrop-blur-md z-[999] p-2 flex w-full h-[20dvh] flex-0 md:w-4/12 md:h-[80dvh] flex-shrink-0 self-start flex-col md:border-l md:border-white md:gap-2 gap-1">
        <div className="border-b flex flex-row items-center content-center justify-center p-2">
          <h1 className="text-center text-xl font-bold p-2 capitalize">{image.name}</h1>
        </div>
        <div className="flex flex-col space-x-4 space-y-1 pl-2">
          <div className="flex flex-row md:p-2 px-4">
            <span>Uploaded By </span>
            <span className="font-bold pl-3">{uploaderInfo.fullName}</span>
          </div>
          <div className="flex flex-row md:p-2">
            <span>Created On </span>
            <span className="font-bold pl-3">{new Date(image.createdAt).toLocaleDateString()}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

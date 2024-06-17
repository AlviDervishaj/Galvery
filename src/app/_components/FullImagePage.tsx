import { clerkClient } from "@clerk/nextjs/server";
import Image from "next/image";
import { getImage } from "~/server/queries";
import { ShareOnWhatsApp } from "./ShareOnWhatsApp";
import { CloseModalButton } from "./CloseModalButton";

export async function FullPageImageView({ id }: { id: number }) {
  const image = await getImage(id);
  const uploaderInfo = await clerkClient.users.getUser(image.userId);
  console.log({ image });

  return (
    <div className="w-full h-full min-w-0 flex md:flex-row flex-col items-center content-center justify-center">
      <div className="w-10/12 md:w-8/12 mx-auto self-center h-full flex flex-shrink items-center justify-center relative">
        <CloseModalButton />
        <Image src={image.url} alt={image.name} loading="lazy" className="flex-shrink object-contain mx-auto" height={632} width={474} />
      </div>
      <div className="flex w-full md:w-4/12 h-full flex-shrink-0 self-start flex-col border-l border-white gap-2">
        <h5 className="border-b text-center text-xl font-bold p-2 capitalize">{image.name}</h5>
        <div className="flex flex-col">
          <div className="flex flex-row p-2">
            <span>Uploaded By </span>
            <span className="font-bold pl-1">{uploaderInfo.fullName}</span>
          </div>
          <div className="flex flex-row p-2">
            <span>Created On </span>
            <span className="font-bold pl-1">{new Date(image.createdAt).toLocaleDateString()}</span>
          </div>
          <div className="flex flex-row p-2 text-center items-center content-center justify-start gap-4 z-[999999]">
            <ShareOnWhatsApp id={id} />
          </div>
        </div>
      </div>
    </div>
  )
}

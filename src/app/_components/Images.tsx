import Image from "next/image";
import { db } from "~/server/db";
export async function Images() {
  const images = await db.query.images.findMany();
  return (
    <div className="flex flex-wrap items-center content-center justify-evenly gap-4 h-fit w-full relative">
      {images.map((image) => (<div key={image.id} className={"w-30 h-30"}>
        <Image src={image.url} alt={image.name} className={"object-contain w-full h-full"} loading={"lazy"} quality={50} width={200} height={200} />
      </div>))}
    </div>
  );
}

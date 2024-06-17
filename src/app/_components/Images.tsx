import Image from "next/image";
import Link from "next/link";
import { getMyImages } from "~/server/queries";

export async function Images() {
  const images = await getMyImages();
  return (
    <div className="w-full gap-4 p-4 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-9">
      {images.map((image) => (
        <div key={image.id} className="flex h-52 w-52 flex-col items-center content-center justify-center grid-item pb-4">
          <Link href={`/img/${image.id}`} className="h-44 w-44 relative text-center">
            <Image
              src={image.url}
              style={{ objectFit: "cover" }}
              width={176}
              height={132}
              className="rounded-md h-44 aspect-4/3"
              alt={image.name}
            />
          </Link>
        </div>
      ))}
    </div>
  )
}

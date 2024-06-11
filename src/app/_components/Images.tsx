import Image from "next/image";
import Link from "next/link";
import { getMyImages } from "~/server/queries";

export async function Images() {
  const images = await getMyImages();
  return (
    <div className="w-full gap-4 p-4 masonry">
      {images.map((image) => (
        <div key={image.id} className="flex h-52 w-52 flex-col items-center content-center justify-center grid-item pb-4">
          <Link href={`/img/${image.id}`} className="h-44 w-44 relative text-center">
            <Image
              src={image.url}
              style={{ objectFit: "contain" }}
              width={176}
              height={176}
              className="rounded-md h-44"
              alt={image.name}
            />
          </Link>
        </div>
      ))}
    </div>
  )
}

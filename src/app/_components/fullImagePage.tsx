import Image from "next/image";
import { getImage } from "~/server/queries";

export async function PullPageImageView({ id }: { id: number }) {
  const image = await getImage(id);
  return (
    <div className="w-full h-full flex min-w-0">
      <div className="flex flex-shrink items-center justify-center">
        <Image src={image.url} alt={image.name} loading="lazy" className="flex-shrink object-contain" width={190} height={190} />
      </div>
      <div className="flex w-48 flex-col border-l">
        <h5 className="text-xl font-bold">{image.name}</h5>
      </div>
    </div>
  )
}

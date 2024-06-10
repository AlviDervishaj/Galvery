import Image from "next/image";
import { getImage } from "~/server/queries"

export default async function PhotoModal({
  params: { id: photoId },
}: {
  params: { id: string },
}) {
  // turn id to number;
  const idAsNumber = Number(photoId);
  if (Number.isNaN(idAsNumber)) throw new Error("Invalid photo ID");
  const image = await getImage(idAsNumber);
  return (
    <div>
      <Image width={600} height={600} src={image.url} alt={image.name} className="w-96 h-96" />
    </div>
  )
}


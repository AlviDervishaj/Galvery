import Image from "next/image";
import { getMyImages } from "~/server/queries";
export async function Images() {
  const images = await getMyImages();
  return (
    <div className="flex flex-wrap gap-4 justify-center">
      {images.map((image) => (
        <div key={image.id} className="flex h-48 w-48 flex-col">
          <Image
            src={image.url}
            alt={image.name}
            loading={"lazy"}
            style={{ objectFit: "cover" }}
            width={192}
            height={192}
          />
          <div>{image.name}</div>
        </div>
      ))}
    </div>
  );
}

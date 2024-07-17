import { getMyImages } from "~/server/queries";
import { Photo } from "./image/Photo";

export async function Images() {
  const images = await getMyImages();
  return (
    <div className="w-full gap-4 p-4 flex flex-row items-center content-center justify-center flex-wrap">
      {images.map((image) => (
        <Photo image={image} />
      ))}
    </div>
  )
}

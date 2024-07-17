import { FullPageImageView } from "~/app/_components/FullImagePage";
import { getImage } from "~/server/queries";

import { Metadata } from 'next'

type Props = {
  params: { id: string }
}

export async function generateMetadata(
  { params }: Props,
): Promise<Metadata> {
  // read route params
  // turn id to number;
  const idAsNumber = Number(params.id);
  if (Number.isNaN(idAsNumber)) throw new Error("Invalid photo ID");

  const image = await getImage(idAsNumber);

  return {
    title: `Galvery  | ${image.name}`,
    twitter: {
      card: "summary_large_image",
      title: `Check out ${image.name} on Galvery`,
      description: `Discover and curate beautiful collections with Galvery, the ultimate gallery app for visual inspiration. Explore, save, and share your favorite images seamlessly. #Galvery #Inspiration`,
      images: [image.url],
      site: "@alvi_d1",
    },
    description: `Discover and curate beautiful collections with Galvery, the ultimate gallery app for visual inspiration. Explore, save, and share your favorite images seamlessly. #Galvery #Inspiration`,
    creator: "Alvi Dervishaj",
    authors: [{ name: "Alvi Dervishaj", url: "https://alvi-portfolio.vercel.app/" }]
  }
}

export default async function FullImagePage({
  params: { id: photoId },
}: {
  params: { id: string },
}) {
  // turn id to number;
  const idAsNumber = Number(photoId);
  if (Number.isNaN(idAsNumber)) throw new Error("Invalid photo ID");
  return (
    <FullPageImageView id={idAsNumber} />
  )
}



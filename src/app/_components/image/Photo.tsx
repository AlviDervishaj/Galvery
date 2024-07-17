import { getImage } from "~/server/queries";
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuSeparator,
  ContextMenuSub,
  ContextMenuSubContent,
  ContextMenuSubTrigger,
  ContextMenuTrigger,
} from "~/components/ui/context-menu";
import { ShareTwitter } from "../share/ShareTwitter";
import { ShareWhatsApp } from "../share/ShareWhatsApp";
import Link from "next/link";
import Image from "next/image";
export function Photo({ image }: { image: Awaited<ReturnType<typeof getImage>> }) {
  return (
    <ContextMenu>
      <ContextMenuTrigger>
        <div key={image.id} className="flex h-52 w-52 flex-col items-center content-center justify-center grid-item pb-4">
          <Link href={`/img/${image.id}`} className="h-44 w-44 relative text-center">
            <Image
              src={image.url}
              sizes="100vw"
              // Make the image display full width
              style={{
                objectFit: "cover",
                width: '100%',
                height: '100%',
              }}
              width={176}
              height={132}
              className="rounded-md h-44 aspect-4/3"
              alt={image.name}
            />
          </Link>
        </div>
      </ContextMenuTrigger>
      <ContextMenuContent>
        <ContextMenuItem><Link href={`/img/${image.id}`}>View Image</Link></ContextMenuItem>
        <ContextMenuItem><p>Download</p></ContextMenuItem>
        <ContextMenuSub>
          <ContextMenuSubTrigger>Share</ContextMenuSubTrigger>
          <ContextMenuSubContent className="w-48">
            <ContextMenuItem>
              <ShareWhatsApp image={image} />
            </ContextMenuItem>
            <ContextMenuItem>
              <ShareTwitter image={image} />
            </ContextMenuItem>
            <ContextMenuSeparator />
            <ContextMenuItem>Copy Link</ContextMenuItem>
          </ContextMenuSubContent>
        </ContextMenuSub>
      </ContextMenuContent>
    </ContextMenu>
  )
}

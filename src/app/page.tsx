import Image from "next/image";
import { db } from "~/server/db";

export const dynamic = "force-dynamic";

const mockUrls: Array<string> = [
  "https://utfs.io/f/1f0b817d-7a5b-4873-8c7a-089e1b367e62-o9ch59.jpeg",
  "https://utfs.io/f/d98e3389-5729-4bc6-abd7-0ba6483ae931-bytprd.jpeg",
  "https://utfs.io/f/ea64e516-1646-4082-ba0a-0268b24086ad-y30zk0.jpeg",
  "https://utfs.io/f/a40b9fa5-f0d9-4528-bd22-d96f14623d7d-wndu07.jpeg"
];

const mockImages = mockUrls.map((url, index) => ({
  id: index + 1,
  url
}));

export default async function HomePage() {
  const posts = await db.query.posts.findMany();
  console.log({ posts });

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
      <div className="flex flex-wrap gap-4">
        {posts.map((post) => (<div key={post.id}>{post.name}</div>))}
        {
          [...mockImages, ...mockImages, ...mockImages].map((image) => (
            <div key={image.id} className="w-48 relative p-4">
              <Image loading="lazy"
                style={{
                  objectFit: 'contain',
                }} width={300} height={300} src={image.url} alt="Random Pinterest Files" />
            </div>
          ))
        }
      </div>
      Hello World !
    </main>
  );
}

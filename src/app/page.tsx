import { SignedIn, SignedOut } from "@clerk/nextjs";
import { Images } from "./_components/Images";

export const dynamic = "force-dynamic";

export default async function HomePage() {
  return (
    <main className="w-fit h-fit">
      <SignedOut>
        <div className="w-full h-full p-2 text-3xl font-bold text-center overflow-hidden">
          <h1 className="text-center">Please sign in to get started.</h1>
        </div>
      </SignedOut>
      <SignedIn>
        <Images />
      </SignedIn>
    </main>
  );
}

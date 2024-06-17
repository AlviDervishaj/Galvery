import { SignedIn, SignedOut } from "@clerk/nextjs";
import { Images } from "./_components/Images";

export const dynamic = "force-dynamic";

export default async function HomePage() {
  return (
    <main className="w-fit h-fit">
      <SignedOut>
        <div className="w-full h-fit p-2 text-3xl font-bold text-center">
          <h1>Please sign in to get started.</h1>
        </div>
      </SignedOut>
      <SignedIn>
        <Images />
      </SignedIn>
    </main>
  );
}

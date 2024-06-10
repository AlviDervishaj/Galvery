import { Navigation } from "./_components/Navigation";
import { SignedIn, SignedOut } from "@clerk/nextjs";
import { Images } from "./_components/Images";

export const dynamic = "force-dynamic";

export default async function HomePage() {
  return (
    <main className="w-full h-full">
      <Navigation />
      <SignedOut>
        <div className="w-full h-full p-2 text-3xl font-bold text-center">
          <h1>Please Sign In.</h1>
        </div>
      </SignedOut>
      <SignedIn>
        <Images />
      </SignedIn>
    </main>
  );
}

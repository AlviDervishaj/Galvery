"use client";
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { UploadButton } from "~/utils/uploadthings";

export function Navigation() {
  const router = useRouter();
  return (
    <nav className="w-full flex items-center justify-between border-b border-gray-600 text-xl font-semibold">
      {/* Signed out components */}
      <SignedOut>
        <div className="p-2">
          <SignInButton />
        </div>
      </SignedOut>
      <SignedIn>
        <div className="w-full h-fit p-2 flex flex-row items-center justify-between">
          <UploadButton endpoint={"imageUploader"}
            onClientUploadComplete={() => {
              // update page content
              router.refresh();
            }} />
            <UserButton showName />
        </div>
      </SignedIn>
    </nav>
  )
}

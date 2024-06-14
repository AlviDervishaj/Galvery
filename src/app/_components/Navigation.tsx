import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { UploadButton } from "./UploadButton";
import { Logo } from "./Logo";

export function Navigation() {
  return (
    <nav className="w-full flex items-center justify-between border-b border-gray-600 text-xl font-semibold">
      {/* Signed out components */}
      <SignedOut>
        <div className="p-4 ml-auto">
          <SignInButton />
        </div>
      </SignedOut>
      <SignedIn>
        <div className="w-full h-fit p-2 flex flex-row items-center justify-between">
          <Logo />
          <div className="w-fit h-fit p-2 flex flex-row items-center content-center justify-evenly gap-4">
            <UploadButton />
            <UserButton showName/>
          </div>
        </div>
      </SignedIn>
    </nav>
  )
}

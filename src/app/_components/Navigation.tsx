import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

export function Navigation() {
  return (
    <nav className="w-full flex items-center justify-between border-b border-gray-600 text-xl font-semibold">
      <div className="p-2 m-0">
        <h1>Hello World !</h1>
      </div>
      <div>
        {/* Signed out components */}
        <SignedOut>
          <div className="p-2">
            <SignInButton />
          </div>
        </SignedOut>
        <SignedIn>
          <div className="p-2 flex items-center">
            <UserButton />
          </div>
        </SignedIn>
      </div>
    </nav>
  )
}

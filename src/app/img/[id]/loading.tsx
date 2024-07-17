import { ImSpinner2 } from "react-icons/im";
export default function Loading() {
  // You can add any UI inside Loading, including a Skeleton.
  return <section className="z-50 fixed top-0 left-0 w-screen h-screen bg-black/80 flex flex-row items-center content-center justify-center">
    <div className="relative p-2">
      <ImSpinner2 size={50} className="animate-spin duration-1000"/>
    </div>
  </section>
}


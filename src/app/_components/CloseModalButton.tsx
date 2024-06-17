'use client';
import { useRouter } from "next/navigation";

export function CloseModalButton() {
  const router = useRouter();
  function closeModalButton() {
    router.push("/");
  }
  return (
    <div className="absolute top-0 left-0 backdrop-blur-[2px] md:top-5 md:left-[90%] lg:left-[93.5%] p-2">
      <button onClick={closeModalButton} className="p-2 border-white border-2 rounded-lg">
        <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24" strokeWidth={2.5} stroke="white" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
        </svg>
      </button>
    </div>
  )
}

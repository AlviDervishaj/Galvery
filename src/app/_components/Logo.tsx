import Image from "next/image";

export function Logo(){
  return (
      <Image src="/alvi-high-resolution-logo-white.png" className="w-auto h-auto" alt="Alvi Logo" width={100} loading="lazy" height={70}/>
  )
}

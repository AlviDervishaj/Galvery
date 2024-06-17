"use client";
import { RWebShare } from "react-web-share";
export function ShareOnWhatsApp({ id }: { id: number }) {
  return (
    <RWebShare data={{
      url: process.env.NODE_ENV === "production" ? `https://galvery.vercel.app/img/${id}` : `http://localhost:3000/img/${id}`,
      title: "Share this photo",
      text: "Look at this photo from Galvery. ",
    }}
    >
      <h1 className="flex flex-row items-center content-center text-lg gap-4 cursor-pointer">
        Share
        <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24" strokeWidth={2} stroke="white" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M7.217 10.907a2.25 2.25 0 1 0 0 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186 9.566-5.314m-9.566 7.5 9.566 5.314m0 0a2.25 2.25 0 1 0 3.935 2.186 2.25 2.25 0 0 0-3.935-2.186Zm0-12.814a2.25 2.25 0 1 0 3.933-2.185 2.25 2.25 0 0 0-3.933 2.185Z" />
        </svg>
      </h1>
    </RWebShare>
  );
} 

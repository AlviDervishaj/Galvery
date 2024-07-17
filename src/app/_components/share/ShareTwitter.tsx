"use client";
import React from "react";
import { BsTwitterX } from "react-icons/bs";
import { TwitterShareButton } from "react-share";
import { getImage } from "~/server/queries";

export function ShareTwitter({ image }: { image: Awaited<ReturnType<typeof getImage>> }) {
  return (
    <TwitterShareButton
      title={`Check out this ${image.name.split(".")[0]} photo on Galvery.`}
      hashtags={["galvery", "image", ...image.name.split(".")]}
      url={process.env.NODE_ENV === "production" ? `https://galvery.vercel.app/img/${image.id}` : `http://localhost:3000/img/${image.id}`}

    >
      <button
        className="flex flex-row items-center content-center justify-evenly text-center gap-3"
      >
        <BsTwitterX /> Twitter
      </button>
    </TwitterShareButton>
  );
}

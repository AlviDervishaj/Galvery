"use client";

import React from "react";
import { BsWhatsapp } from "react-icons/bs";
import { WhatsappShareButton } from "react-share";
import { getImage } from "~/server/queries";

export function ShareWhatsApp({ image }: { image: Awaited<ReturnType<typeof getImage>> }) {
  return (
    <WhatsappShareButton
      title={image.name}
      url={process.env.NODE_ENV === "production" ? `https://galvery.vercel.app/img/${image.id}` : `http://localhost:3000/img/${image.id}`}
    >
      <p
        className="flex flex-row items-center content-center justify-evenly text-center gap-3"
      >
        <BsWhatsapp /> WhatsApp
      </p>
    </WhatsappShareButton>
  );
}


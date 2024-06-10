"use client";

import * as Sentry from "@sentry/nextjs";
import Error from "next/error";
import { useEffect } from "react";

export default function GlobalError({ error }: { error: unknown }) {
  useEffect(() => {
    // Capture error and send it to sentry
    Sentry.captureException(error);
  }, [error]);

  return (
    <html>
      <body>
        <Error statusCode={500} title={"Error"} />
      </body>
    </html>
  );
}

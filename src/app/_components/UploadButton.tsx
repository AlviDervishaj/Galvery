"use client";
import { useRouter } from "next/navigation";
import { useUploadThing } from "~/utils/uploadthings";
import { UploadSVG } from "./UploadSVG";
import { toast } from "sonner";
import { LoadingSpinnerSVG } from "./LoadingSpinner";
import { useState } from "react";

// inferred input off useUploadThing
type Input = Parameters<typeof useUploadThing>;
let counter = 0;
let previousCounter = 0;

const useUploadThingInputProps = (...args: Input) => {
  const $ut = useUploadThing(...args);

  const onChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;

    const selectedFiles = Array.from(e.target.files);
    const result = await $ut.startUpload(selectedFiles);

    console.log("uploaded files", result);
    // TODO: persist result in state maybe?
  };

  return {
    inputProps: {
      onChange,
      multiple: ($ut.routeConfig?.image?.maxFileCount ?? 1) > 1,
      accept: "image/*",
    },
    isUploading: $ut.isUploading,
  };
};


export function UploadButton() {
  const router = useRouter();


  const { inputProps } = useUploadThingInputProps("imageUploader", {
    onUploadError(error) {
      console.log({ error });
      toast.error(<div className="flex gap-2 text-center text-white items-center">
        <LoadingSpinnerSVG /> <span className="text-lg">
          {error.message}
        </span>
      </div>, {
        richColors: true,
        duration: 2000,
        id: `error`
      });
    },
    onUploadBegin() {
      toast(<div className="flex gap-2 text-center text-white items-center">
        <LoadingSpinnerSVG /> <span className="text-lg">
          Uploading..
        </span>
      </div>, {
        duration: 100000,
        id: `upload-begin`
      });
    },
    onClientUploadComplete() {
      toast.dismiss(`upload-begin`);
      toast("Upload Complete !");
      router.refresh();
    }
  });
  return (
    <div className="cursor-pointer">
      <label htmlFor="upload-button" className="cursor-pointer z-50">
        <UploadSVG />
      </label>
      <input {...inputProps} id="upload-button" type="file" className="sr-only" />
    </div>
  );
}

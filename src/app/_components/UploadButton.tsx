"use client";

import { useRouter } from "next/navigation";
import { useUploadThing } from "~/utils/uploadthings";
import { UploadSVG } from "./UploadSVG";
import { toast } from "sonner";

// inferred input off useUploadThing
type Input = Parameters<typeof useUploadThing>;

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
    onUploadBegin() {
      toast("Uploading..", {
        duration: 100000,
        id: "upload-begin"
      });
    },
    onClientUploadComplete() {
      toast.dismiss("upload-begin");
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

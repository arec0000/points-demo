"use client";

import Image from "next/image";
import classes from "./index.module.scss";
import { Icon32Px } from "@/shared/uikit/atoms/Icon32Px";
import { useEffect, useState } from "react";

export function AvatarInput({
  src,
  onChange,
}: {
  src: string | undefined;
  onChange: (file: File) => void;
}) {
  const [localFileUrl, setLocalFileUrl] = useState<string>();

  useEffect(() => {
    if (localFileUrl) {
      return () => {
        URL.revokeObjectURL(localFileUrl);
      };
    }
  }, [src, localFileUrl]);

  const currentSrc = localFileUrl ?? src;

  return (
    <label className={classes.avatar}>
      {currentSrc ? (
        <Image src={currentSrc} alt="avatar" fill sizes="60vw" />
      ) : (
        <Icon32Px name="camera" color="blue" />
      )}

      <input
        type="file"
        accept="image/png, image/jpeg"
        multiple={false}
        onChange={(e) => {
          if (e.target.files) {
            const file = e.target.files[0];

            onChange(file);

            const url = URL.createObjectURL(file);

            setLocalFileUrl(url);
          }
        }}
      />
    </label>
  );
}

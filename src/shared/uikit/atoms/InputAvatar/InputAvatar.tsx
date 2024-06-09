import { CSSProperties, useEffect, useRef, useState } from "react";

import { Icon32Px } from "../Icon32Px";
import { Text } from "../Text";

import classes from "./InputAvatar.module.scss";

interface IProps {
  imageFile: File | null;
  name: string;
  onChange: (newImageFile: File | null) => void;
}

export function InputAvatar({ imageFile, onChange, name }: IProps) {
  const [objectUrl, setObjectUrl] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0];
    if (!selectedFile) return;
    onChange(selectedFile);
  };

  useEffect(() => {
    if (imageFile) {
      const url = URL.createObjectURL(imageFile);
      setObjectUrl(url);

      return () => {
        URL.revokeObjectURL(url);
      };
    }
    return () => {};
  }, [imageFile]);

  const fileInputStyles: CSSProperties = {
    position: "absolute",
    top: 0,
    left: 0,
    opacity: 0,
  };

  return (
    <div className={classes.container}>
      <input
        type="file"
        ref={fileInputRef}
        accept="image/*"
        onChange={handleFileChange}
        style={fileInputStyles}
      />
      <button className={classes.container__button} onClick={handleClick}>
        {objectUrl ? (
          <div className={classes.icon}>
            <img src={objectUrl} alt="uploaded" />
          </div>
        ) : (
          <div className={classes.container__icon}>
            <Icon32Px name="camera" color="blue" />
          </div>
        )}
      </button>
      <Text variant="h3">{name}</Text>
      <button onClick={handleClick}>
        <Text variant="pill" color="blue">
          Изменить фото
        </Text>
      </button>
    </div>
  );
}

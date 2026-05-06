import React from "react";
import Image, {ImageProps} from "next/image";

export type ProjectHeaderProps = {
  readonly title: string;
  readonly description: string;
  readonly image: ImageProps["src"];
  readonly imageAlt: string;
};

export function ProjectHeader({ title, description, image, imageAlt }: ProjectHeaderProps) {
  return (
    <div>
      <div className="grid grid-cols-2 gap-4 items-center p-2 pb-10">
        <div>
          <p className="text-3xl">
            <strong>{title}</strong>
          </p>
          <p>
            {description}
          </p>
        </div>
        <div>
          <Image className="float-right" src={image} alt={imageAlt} height="450" />
        </div>
      </div>
    </div>
  );
}
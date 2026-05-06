import React from "react";

export type ThemedImageProps = {
  readonly light: string;
  readonly dark: string;
  readonly alt: string;
  readonly imgProps?: React.ComponentProps<"img">;
} & React.ComponentProps<"picture">;

export const ThemedImage = React.forwardRef<HTMLPictureElement, ThemedImageProps>((props, ref) => {
  const { light, dark, alt, imgProps, ...other } = props;

  return (
    <picture ref={ref} {...other}>
      <source srcSet={light} media="(prefers-color-scheme: light)" />
      <source srcSet={dark} media="(prefers-color-scheme: dark)" />

      <img src={props["light"]} alt={alt} {...imgProps} />
    </picture>
  );
});

ThemedImage.displayName = "ThemedImage";
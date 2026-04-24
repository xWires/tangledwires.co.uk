import type { Metadata } from "next";
import React from "react";

import "./globals.css";
import "@fortawesome/fontawesome-svg-core/styles.css";

export const metadata: Metadata = {
  title: { absolute: "TangledWires", template: "%s | TangledWires" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <script defer data-domain="tangledwires.co.uk" src="https://analytics.tangledwires.co.uk/js/script.js"></script>
      </head>
      <body>
        <div className="flex flex-col justify-center items-center p-10" style={{ paddingTop: "50px" }}>
          <picture className="flex justify-center items-center" style={{ paddingBottom: "35px" }}>
            <source srcSet="/images/logo_light2.png" media="(prefers-color-scheme: light)" />
            <source srcSet="/images/logo_dark2.png" media="(prefers-color-scheme: dark)" />

            <img src="/images/logo_light2.png" alt="The word 'TangledWires' next to a computer terminal" width="350" />
          </picture>
          {children}
          <div className="p-10">
            <p>&copy; 2026 TangledWires Ltd</p>
          </div>
        </div>
      </body>
    </html>
  );
}

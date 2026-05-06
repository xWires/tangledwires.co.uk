import type {Metadata, Viewport} from "next";
import React from "react";
import "@fortawesome/fontawesome-svg-core/styles.css";
import {ThemedImage} from "@/components/ThemedImage";
import Link from "next/link";

import "./globals.css";

export const metadata: Metadata = {
  title: { absolute: "TangledWires", template: "%s | TangledWires" },
  creator: "TangledWires",
};

export const viewport: Viewport = {
  themeColor: "#00be0b",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <script defer data-domain="tangledwires.co.uk" src="https://analytics.tangledwires.co.uk/js/script.js"></script>
      </head>
      <body>
        <div className="flex flex-col justify-center items-center p-10 " style={{ paddingTop: "50px" }}>
          <div className="max-w-7xl">
            <div>
              <Link href="/">
                <ThemedImage
                  className="flex justify-center items-center"
                  style={{ paddingTop: "50px" }}

                  light="/images/logo_light2.png"
                  dark="/images/logo_dark2.png"
                  alt="The word 'TangledWires' next to a computer terminal"

                  imgProps={{ width: "350px" }}
                />
              </Link>
            </div>
            <hr />
            <div className="text-left">
              {children}
            </div>
            <div className="p-10 text-center">
              <p>&copy; 2026 TangledWires Ltd</p>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}

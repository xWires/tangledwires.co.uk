import type {Metadata, Viewport} from "next";
import React from "react";
import "@fortawesome/fontawesome-svg-core/styles.css";
import {ThemedImage} from "@/components/ThemedImage";
import Link from "next/link";

import "./globals.css";

export const metadata: Metadata = {
  title: { absolute: "TangledWires", template: "%s | TangledWires" },
  creator: "TangledWires",
  openGraph: {
    type: "website",
    title: { absolute: "TangledWires", template: "%s | TangledWires" },
    siteName: "TangledWires",
    images: [{ url: "/images/logo_dark.png" }]
  },
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
        <div className="flex flex-col justify-center items-center p-10" style={{ paddingTop: "50px" }}>
          <div className="max-w-3xl w-full mx-auto">
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
            <hr />
            <div className="text-center">
              <Link href="/legal/privacy">Privacy Policy</Link>
              {" "}&middot;{" "}
              <Link href="https://status.tangledwires.co.uk/">Status</Link>
              <br />
              <br />
              <p>&copy; 2026 TangledWires Ltd</p>
              <br />
              <p>Registered in England and Wales &middot; Registered Number: 16997164</p>
              <p>Registered Office: 20 Wenlock Road, London, England, N1 7GU</p>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}

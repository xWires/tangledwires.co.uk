import type { Metadata } from 'next';
import {ProjectHeader} from "@/components/ProjectHeader";
import Link from "next/link";
import mobileScreenshot from "./mobile_screenshot.png";

export const metadata: Metadata = {
  title: "Stationary",
};

export default function StationaryPage() {
  return (
    <>
      <ProjectHeader
        title="Stationary"
        description="Data is fun, and so are trains."
        image={mobileScreenshot}
        imageAlt="A phone displaying statistics on train station visits"
      />
      <div className="prose">
        <p>Stationary is an app for tracking which train and metro stations you&apos;ve visited in Great Britain. </p>
        <p className="text-2xl"><strong>Get Stationary</strong></p>
        <p className="text-xl">iOS</p>
        <p>App Store: TBD</p>
        <p className="text-xl">Android</p>
        <p>Play Store: TBD</p>
        <p>APK Download (Unstable): <Link href="https://github.com/TangledWiresOfficial/Stationary/releases/latest">https://github.com/TangledWiresOfficial/Stationary/releases/latest</Link></p>
        <p className="text-xl">Online</p>
        <p>You can also use Stationary online at <Link href="https://stationary.tangledwires.co.uk/">https://stationary.tangledwires.co.uk/</Link></p>
        <br />
        <p>Stationary is open source software. You can find the code at <Link href="https://github.com/TangledWiresOfficial/Stationary">https://github.com/TangledWiresOfficial/Stationary</Link></p>
      </div>
    </>
  );
}
"use client";

import {ProjectHeader} from "@/components/ProjectHeader";
import Link from "next/link";
import mobileScreenshot from "./mobile_screenshot.png";
import {useEffect, useState} from "react";
import axios from "axios";

export function StationaryPageClient() {
  const [stats, setStats] = useState<{ users: number, journeys: number, station_visits: number, stations_visited: number }>();

  useEffect(() => {
    axios.get("https://stationary-sync.tangledwires.co.uk/api/v1/stats").then((r) => setStats(r.data));
  }, []);

  return (
    <>
      <ProjectHeader
        title="Stationary"
        description="Data is fun, so are trains."
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
        <p className="text-2xl"><strong>Stationary Sync</strong></p>
        <p>Optionally, you can backup and sync your journeys across devices using a TangledWires account with Stationary Sync. (Currently only available to beta testers.)</p>
        {stats && (
          <p>There are currently <strong>{stats.users}</strong> users storing <strong>{stats.journeys}</strong> journeys totalling <strong>{stats.station_visits}</strong> station visits across <strong>{stats.stations_visited}</strong> stations on Stationary Sync!</p>
        )}
        <br />
        <p>Stationary is open source software. You can find the code at <Link href="https://github.com/TangledWiresOfficial/Stationary">https://github.com/TangledWiresOfficial/Stationary</Link></p>
      </div>
    </>
  );
}
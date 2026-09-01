import type {Metadata} from 'next';
import {StationaryPageClient} from "@/app/projects/stationary/StationaryPageClient";

export const metadata: Metadata = {
  title: "Stationary",
  openGraph: {
    title: "Stationary",
  },
};

export default function StationaryPage() {
  return <StationaryPageClient />;
}
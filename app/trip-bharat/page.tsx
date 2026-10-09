import type { Metadata } from "next";
import TripBharatProject from "@/components/TripBharatProject";

export const metadata: Metadata = {
  title: "Trip Bharat",
  description:
    "Full-stack web application for managing and displaying trip schedules for students and faculty at Trip Bharat. Case study by Haresh Sainaath.",
  alternates: { canonical: "/trip-bharat" },
  openGraph: {
    title: "Trip Bharat - Haresh Sainaath",
    description:
      "Full-stack trip-scheduling platform built for students and faculty travel.",
    url: "/trip-bharat",
  },
};

export default function TripBharatPage() {
  return <TripBharatProject />;
}

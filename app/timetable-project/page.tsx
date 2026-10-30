import type { Metadata } from "next";
import SKCTTimetableProject from "@/components/SKCTTimetableProject";

export const metadata: Metadata = {
  title: "SKCT Automated Timetable",
  description:
    "A React scheduling prototype with constraint controls, timetable views, and local component checks. Case study by Haresh Sainaath S.",
  alternates: { canonical: "/timetable-project" },
  openGraph: {
    title: "SKCT Automated Timetable - Haresh Sainaath",
    description:
      "An academic scheduling prototype with constraint controls, timetable views, and local component checks.",
    url: "/timetable-project",
  },
};

export default function TimetableProject() {
  return <SKCTTimetableProject />;
}

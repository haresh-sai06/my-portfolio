import type { Metadata } from "next";
import SKCTTimetableProject from "@/components/SKCTTimetableProject";

export const metadata: Metadata = {
  title: "SKCT Automated Timetable",
  description:
    "Automated timetable generation system for SKCT that eliminates manual scheduling conflicts and ensures optimal resource allocation. Case study by Haresh Sainaath.",
  alternates: { canonical: "/timetable-project" },
  openGraph: {
    title: "SKCT Automated Timetable - Haresh Sainaath",
    description:
      "Automated scheduling system that removes manual conflicts and optimizes resource allocation.",
    url: "/timetable-project",
  },
};

export default function TimetableProject() {
  return <SKCTTimetableProject />;
}

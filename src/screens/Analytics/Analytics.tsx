import React from "react";
import { DashboardSection } from "./sections/DashboardSection";
import { SidebarSection } from "./sections/SidebarSection";

export const Analytics = (): JSX.Element => {
  return (
    <div
      className="flex w-full min-h-screen bg-[linear-gradient(0deg,rgba(255,238,238,1)_0%,rgba(255,238,238,1)_100%),linear-gradient(0deg,rgba(255,255,255,1)_0%,rgba(255,255,255,1)_100%)]"
      data-model-id="1:1385"
    >
      <SidebarSection />
      <DashboardSection />
    </div>
  );
};

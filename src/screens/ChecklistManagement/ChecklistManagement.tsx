import React from "react";
import { MainContentSection } from "./sections/MainContentSection";
import { SidebarSection } from "./sections/SidebarSection";

export const ChecklistManagement = (): JSX.Element => {
  return (
    <div
      className="flex flex-row w-full items-start relative bg-[linear-gradient(0deg,rgba(255,238,238,1)_0%,rgba(255,238,238,1)_100%),linear-gradient(0deg,rgba(255,255,255,1)_0%,rgba(255,255,255,1)_100%)]"
      data-model-id="1:924"
    >
      <div className="flex min-h-screen items-start relative self-stretch w-full">
        <SidebarSection />
        <MainContentSection />
      </div>
    </div>
  );
};

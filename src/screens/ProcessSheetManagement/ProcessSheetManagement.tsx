import React from "react";
import { CardWrapperSection } from "./sections/CardWrapperSection";
import { FooterSection } from "./sections/FooterSection";
import { HeaderSection } from "./sections/HeaderSection";
import { MainContentSection } from "./sections/MainContentSection";
import { NotificationSection } from "./sections/NotificationSection";

export const ProcessSheetManagement = (): JSX.Element => {
  return (
    <main
      className="relative w-full min-h-screen bg-[linear-gradient(0deg,rgba(255,238,238,1)_0%,rgba(255,238,238,1)_100%),linear-gradient(0deg,rgba(255,255,255,1)_0%,rgba(255,255,255,1)_100%)] bg-chablis"
      data-model-id="1:2712"
    >
      <HeaderSection />
      <CardWrapperSection />
      <MainContentSection />
      <NotificationSection />
      <FooterSection />
    </main>
  );
};

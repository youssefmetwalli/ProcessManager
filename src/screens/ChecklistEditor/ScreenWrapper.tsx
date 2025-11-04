import React from "react";
import { BackgroundSection } from "./sections/BackgroundSection";
import { BackgroundShadowSection } from "./sections/BackgroundShadowSection";
import { BackgroundWrapperSection } from "./sections/BackgroundWrapperSection";
import { GeneralWrapperSection } from "./sections/GeneralWrapperSection";

export const ChecklistEditor = (): JSX.Element => {
  return (
    <div
      className="flex flex-col w-full items-start pt-6 pb-12 px-4 md:px-8 lg:px-[260px] bg-[linear-gradient(0deg,rgba(255,238,238,1)_0%,rgba(255,238,238,1)_100%),linear-gradient(0deg,rgba(255,255,255,1)_0%,rgba(255,255,255,1)_100%)]"
      data-model-id="1:593"
    >
      <div className="flex flex-col max-w-[1400px] items-start gap-6 w-full mx-auto">
        <BackgroundShadowSection />
        <BackgroundSection />
        <BackgroundWrapperSection />
        <GeneralWrapperSection />
      </div>
    </div>
  );
};

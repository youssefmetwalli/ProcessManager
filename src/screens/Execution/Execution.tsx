import { ContentContainerSection } from "./sections/ContentContainerSection";
import { HeaderSection } from "./sections/HeaderSection";
import { InfoCardSection } from "./sections/InfoCardSection";
import { MainContentWrapperSection } from "./sections/MainContentWrapperSection";

export const Execution = (): JSX.Element => {
  return (
    <div
      className="relative w-full min-h-screen bg-[linear-gradient(0deg,rgba(255,238,238,1)_0%,rgba(255,238,238,1)_100%),linear-gradient(0deg,rgba(255,255,255,1)_0%,rgba(255,255,255,1)_100%)] flex flex-col"
      data-model-id="1:2286"
    >
      <HeaderSection />
      <InfoCardSection />
      <MainContentWrapperSection />
      <ContentContainerSection />
    </div>
  );
};

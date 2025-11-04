import { DashboardMainSection } from "./sections/DashboardMainSection/DashboardMainSection";
import { SidebarSection } from "./sections/SidebarSection";

export const Dashboard = (): JSX.Element => {
  return (
    <main
      className="flex w-full bg-[linear-gradient(0deg,rgba(255,238,238,1)_0%,rgba(255,238,238,1)_100%),linear-gradient(0deg,rgba(255,255,255,1)_0%,rgba(255,255,255,1)_100%)]"
      data-model-id="1:1816"
    >
      <div className="flex w-full">
        <SidebarSection />
        <DashboardMainSection />
      </div>
    </main>
  );
};

import { DashboardSection } from "../Analytics/sections/DashboardSection";
import { SidebarSection } from "../Dashboard/sections/SidebarSection";

export const Kanban = (): JSX.Element => {
  return (
    <div className="flex min-h-screen w-full bg-[linear-gradient(0deg,rgba(255,238,238,1)_0%,rgba(255,238,238,1)_100%),linear-gradient(0deg,rgba(255,255,255,1)_0%,rgba(255,255,255,1)_100%)]">
      {/* Shared sidebar from Dashboard */}
      <SidebarSection />

      {/* Main Kanban content */}
      <main className="flex-1">
        <DashboardSection />
      </main>
    </div>
  );
};

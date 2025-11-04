import { DashboardSection } from "../Analytics/sections/DashboardSection";
import { TaskListSection } from "./sections/TaskListSection";

export const Kanban = (): JSX.Element => {
  return (
    <div
      className="flex w-full items-start relative bg-[linear-gradient(0deg,rgba(255,238,238,1)_0%,rgba(255,238,238,1)_100%),linear-gradient(0deg,rgba(255,255,255,1)_0%,rgba(255,255,255,1)_100%)] min-h-screen"
      data-model-id="1:1065"
    >
      <div className="flex items-start relative w-full">
        <TaskListSection />
        <DashboardSection />
      </div>
    </div>
  );
};

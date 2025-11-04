import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Dashboard } from "./screens/Dashboard";
import { ChecklistDetail } from "./screens/ChecklistDetail";
import { ChecklistEditor } from "./screens/ChecklistEditor";
import { Execution } from "./screens/Execution";
import { ChecklistManagement } from "./screens/ChecklistManagement";
import { ProcessSheetManagement } from "./screens/ProcessSheetManagement";
import { Kanban } from "lucide-react";
import { Analytics } from "./screens/Analytics";


const router = createBrowserRouter([
  {
    path: "/*",
    element: <Dashboard />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
  {
    path: "/checklistdetail",
    element: <ChecklistDetail />,
  },
  {
    path: "/checklisteditor",
    element: <ChecklistEditor />,
  },
  {
    path: "/execution",
    element: <Execution />,
  },
  {
    path: "/checklists",
    element: <ChecklistManagement />,
  },
  {
    path: "/process-sheets",
    element: <ProcessSheetManagement />,
  },
  {
    path: "/kanban",
    element: <Kanban />,
  },
  {
    path: "/analytics",
    element: <Analytics />,
  },
]);

export const App = () => {
  return <RouterProvider router={router} />;
};

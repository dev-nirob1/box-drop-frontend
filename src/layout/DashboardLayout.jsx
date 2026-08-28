import { Outlet } from "react-router";
import DashboardSidebar from "../components/layout/DashboardSidebar";
import DashboardTopbar from "../components/layout/DashboardTopbar";
import { SidebarProvider } from "../context/SidebarContext";

const DashboardLayout = () => {
  return (
    <SidebarProvider>
      <div className="flex min-h-screen">
        <DashboardSidebar />

        <div className="flex min-w-0 flex-1 flex-col lg:pl-64">
          <DashboardTopbar />

          <main className="flex-1 p-6">
            <Outlet />
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
};
export default DashboardLayout;

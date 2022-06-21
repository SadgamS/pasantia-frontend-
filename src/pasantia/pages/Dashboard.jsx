import DashboardLayout from "layout/layoutContainers/DashboardLayout";
import {DashboardNavbar} from "pasantia/components/Navbars/DashboardNavbar/DashboardNavbar";

export const Dashboard = () => {
  return (
    <DashboardLayout>
        <DashboardNavbar />
        <div> Hola desde el Dashboard</div>
    </DashboardLayout>
  )
}

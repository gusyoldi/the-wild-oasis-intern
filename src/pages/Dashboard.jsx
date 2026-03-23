import DashboardFilter from "../features/dashboard/DashboardFilter";
import DashboardLayout from "../features/dashboard/DashboardLayout";
import Heading from "../ui/Heading";
import HeaderRow from "../ui/Row";

function Dashboard() {
  return (
    <>
      <HeaderRow>
        <Heading as="h1">Dashboard</Heading>
        <DashboardFilter />
      </HeaderRow>

      <DashboardLayout />
    </>
  );
}

export default Dashboard;

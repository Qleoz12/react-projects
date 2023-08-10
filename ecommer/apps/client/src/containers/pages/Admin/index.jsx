import { FullAdminLayout } from "../../../hocs/layouts/FullAdminLayout";
import { Banners, Dashboard, Productos, Tickets } from "./compenents";

export const Admin = () => {
  return (
    <FullAdminLayout>
      <Dashboard />
      <Banners />
      <Productos />
      <Tickets />
    </FullAdminLayout>
  );
};

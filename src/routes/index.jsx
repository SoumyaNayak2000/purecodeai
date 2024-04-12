/* eslint-disable react-refresh/only-export-components */
import { lazy } from "react";
import { flattenRoutes } from "@/helpers";

// admin page
const AdminWallet = lazy(() => import("../app/admin/wallet/page"));

const adminRoutes = [
  {
    path: "/",
    name: "Wallet",
    element: <AdminWallet />,
  },
];

const allAdminRoutes = [...adminRoutes];

const allAdminFlattedRoutes = flattenRoutes([...allAdminRoutes]);

export { allAdminFlattedRoutes };

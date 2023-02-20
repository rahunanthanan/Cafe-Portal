import { createBrowserRouter } from "react-router-dom";

import { AppLayout } from "./AppLayout";
import { Home } from "./features/home/Home";
import { Cafes } from "./features/cafes/Cafes";
import { Employees } from "./features/employees/Employees";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        index: true,
        element: <Home />,
      },
      {
        path: "/cafes/*",
        element: <Cafes />,
      },
      {
        path: "/employees/*",
        element: <Employees />,
      },
    ],
  },
]);

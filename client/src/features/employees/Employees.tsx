import React, { useEffect, useState } from "react";
import { useRoutes } from "react-router-dom";

import { EmployeesIndex } from "./EmployeesIndex";

export const Employees = () => {
  const router = useRoutes([
    {
      path: "",
      index: true,
      element: <EmployeesIndex />,
    },
  ]);

  return router;
};

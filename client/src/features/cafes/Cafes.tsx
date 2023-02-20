import React, { useEffect, useState } from "react";
import { useRoutes } from "react-router-dom";

import { CafesIndex } from "./CafesIndex";

export const Cafes = () => {
  const router = useRoutes([
    {
      path: "",
      index: true,
      element: <CafesIndex />,
    },
  ]);

  return router;
};

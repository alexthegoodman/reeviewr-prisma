import React, { useState, useEffect, createContext } from "react";

export const useHook = (text = "") => {
  const [json, setJson] = useState(null);

  useEffect(() => {});

  return {
    json,
  };
};

import React, { createContext, useContext } from "react";
import { useDispatch } from "react-redux";

const AppContext = createContext<ReturnType<typeof useDispatch> | undefined>(
  undefined
);

export const AppProvider: React.FC = ({ children }) => {
  const dispatch = useDispatch();

  return <AppContext.Provider value={dispatch}>{children}</AppContext.Provider>;
};

export const useAppDispatchContext = () => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error("useAppDispatchContext must be used within an AppProvider");
  }
  return context;
};

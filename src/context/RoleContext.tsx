import { createContext, ReactNode, useContext, useMemo } from "react";

import { JobDetails } from "@/types/experience";

export type RoleContextType = {
  jobDetails: JobDetails;
};

export const RoleContext = createContext({} as RoleContextType);

type Props = {
  jobDetails: JobDetails;
  children: ReactNode;
};

export const RoleContextProvider = ({ children, jobDetails }: Props) => {
  const value = { jobDetails };
  return (
    <RoleContext.Provider value={value}>
      {children}
    </RoleContext.Provider>
  );
};

export const useRoleContext = () => useContext(RoleContext);
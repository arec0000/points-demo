"use client";

import { ContextError } from "@/shared/lib/errors";
import { createContext, useContext } from "react";

const authContext = createContext<{ isAuthorized: boolean }>({
  isAuthorized: false,
});

export const AuthProvider = authContext.Provider;

export function useAuthContext() {
  const context = useContext(authContext);

  if (!context) {
    throw new ContextError("AuthContext");
  }

  return useContext(authContext);
}

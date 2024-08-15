"use client";

import { createContext, useState } from "react";

interface BackLinkContextType {
  backLink: string;
  setBackLink: (backLink: string) => void;
}

export const BackLinkContext = createContext<BackLinkContextType | null>({
  backLink: "/",
  setBackLink: () => {}
})

export function BackLinkProvider({children} : {children: React.ReactNode}) {
  const [backLink, setBackLink] = useState("/")

  return (
    <BackLinkContext.Provider value={{backLink, setBackLink}}>
      {children}
    </BackLinkContext.Provider>
  )
}
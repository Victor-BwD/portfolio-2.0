import React, { createContext, useState, ReactNode } from "react";

interface LanguageContextType {
  idioma: string;
  alternarIdioma: () => void;
}

export const LanguageContext = createContext<LanguageContextType>({
  idioma: "pt",
  alternarIdioma: () => {},
});

interface LanguageProviderProps {
  children: ReactNode;
}

export function LanguageProvider({ children }: LanguageProviderProps) {
  const [idioma, setIdioma] = useState("pt");

  const alternarIdioma = () => {
    setIdioma(idioma === "pt" ? "en" : "pt");
  };

  return (
    <LanguageContext.Provider value={{ idioma, alternarIdioma }}>
      {children}
    </LanguageContext.Provider>
  );
}
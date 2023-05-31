import React, { createContext, useState } from "react";

export const LanguageContext = createContext();

export function LanguageProvider({ children }) {
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
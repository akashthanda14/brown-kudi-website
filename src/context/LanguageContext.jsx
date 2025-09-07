import React, { createContext, useState, useContext } from "react";

// Context create
const LanguageContext = createContext();

// Custom hook
export const useLanguage = () => useContext(LanguageContext);

// Provider
export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState("english");

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

import React, { createContext, useReducer } from "react";
import LanguageReducer from "./LanguageReducer";

const initialLanguages = [
  { lang: "EN", text: "Current language is English", selected: true },
  { lang: "IT", text: "La lingua corrente è l'Italiano", selected: false },
  { lang: "TR", text: "Şu anki dil Türkçe", selected: false },
  { lang: "RO", text: "Limba actuală este Româna", selected: false },
  { lang: "PT", text: "O idioma atual é Portugues", selected: false },
  { lang: "ES", text: "El idioma actual es el Español", selected: false },
  { lang: "FR", text: "La langue actuelle est le Français", selected: false },
  { lang: "CZ", text: "Aktuální jazyk je Čeština", selected: false },
];

export const LanguageCtx = createContext(initialLanguages);

export const LanguageCtxProvider = ({ children }) => {
  const [state, dispatch] = useReducer(LanguageReducer, initialLanguages);

  const setLanguage = (language) => {
    dispatch({
      type: "SET_LANGUAGE",
      payload: language,
    });
  };

  return (
    <LanguageCtx.Provider value={{ setLanguage, initialLanguages }}>
      {children}
    </LanguageCtx.Provider>
  );
};

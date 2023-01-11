import React, { Component } from "react";
import { LanguageContext } from "./context/language-ctx";

const Strings = {
  EN: "Current language is English",
  IT: "La lingua corrente è l'Italiano",
  TR: "Şu anki dil Türkçe",
  RO: "Limba actuală este Româna",
  PT: "O idioma atual é Portugues",
  ES: "El idioma actual es el Español",
  FR: "La langue actuelle est le Français",
  CZ: "Aktuální jazyk je Čeština",
};

export default class CurrentLanguage extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <LanguageContext.Consumer>
        {(language) => {
          console.log(language);
          return <div>{Strings[language]} !!!</div>;
        }}
      </LanguageContext.Consumer>
    );
  }
}

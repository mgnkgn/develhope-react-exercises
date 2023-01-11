import React, { Component } from "react";

import { LanguageContext } from "./context/language-ctx";
import CurrentLanguage from "./CurrentLanguage";

export default class DisplayLanguage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      language: "EN",
    };
  }

  langChangeHandler = (event) => {
    event.preventDefault();
    this.setState((state) => {
      return {
        language: event.target.value,
      };
    });
  };
  render() {
    return (
      <LanguageContext.Provider value={this.state.language}>
        <form>
          <select
            name="lang"
            id="lang"
            value={this.state.language}
            onChange={this.langChangeHandler.bind(this)}
          >
            <option value="EN">EN</option>
            <option value="IT">IT</option>
            <option value="TR">TR</option>
            <option value="RO">RO</option>
            <option value="PT">PT</option>
            <option value="ES">ES</option>
            <option value="FR">FR</option>
            <option value="CZ">CZ</option>
          </select>
          <br />
          Current language : {this.state.language}
        </form>
        <CurrentLanguage />
      </LanguageContext.Provider>
    );
  }
}

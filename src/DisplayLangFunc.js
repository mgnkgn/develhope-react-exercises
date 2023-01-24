import React, { useContext, useState } from "react";
import { LanguageCtx } from "./LanguageCtx";

const DisplayLangFunc = () => {
  const { setLanguage, initialLanguages } = useContext(LanguageCtx);

  const [lang, setLang] = useState("");
  const [langInfo, setLangInfo] = useState("");

  const onChangeHandler = (event) => {
    event.preventDefault();
    console.log(event.target.value);
    const selectedLanguage = event.target.value;
    const foundLang = initialLanguages.find(
      (el) => el.lang === selectedLanguage
    );
    setLang(foundLang.lang);
    setLangInfo(foundLang.text);
  };
  return (
    <div>
      {" "}
      <form>
        <select name="lang" id="lang" onChange={onChangeHandler}>
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
        Current language : {lang} / {langInfo}
      </form>
    </div>
  );
};

export default DisplayLangFunc;

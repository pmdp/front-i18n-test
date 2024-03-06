import logo from './logo.svg';
import './App.css';
import React, { Component } from "react";
import { useTranslation, Trans } from "react-i18next";

function App() {

  const { t, i18n } = useTranslation();

  const changeLanguage = lng => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>{t("Welcome to React")}</h2>
        <button onClick={() => changeLanguage("de")}>de</button>
        <button onClick={() => changeLanguage("en")}>en</button>
      </header>
      <div className="App-intro">
          <Trans>
            To get started, edit <code>src/App.js</code> and save to reload.
          </Trans>
          <Trans i18nKey="welcome">trans</Trans>
          <Trans>
            {index + 1} <a>xxx</a>
          </Trans>
      </div>
    </div>
  );
}

export default App;

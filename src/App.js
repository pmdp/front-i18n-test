import logo from './logo.svg';
import './App.css';
import React, { Component, Suspense } from "react";

import { useTranslation, Trans } from "react-i18next";

function App() {

  const { t, i18n } = useTranslation();

  const changeLanguage = lng => {
    i18n.changeLanguage(lng);
  };

  const index = 11;

  return (
    <Suspense fallback="loading">
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>{t('welcome')}</h1>
          <button onClick={() => changeLanguage("es")}>es</button>
          <button onClick={() => changeLanguage("en")}>en</button>
          <div className="App-intro">
            
          </div>
        </header>

      </div>
    </Suspense>

  );
}

export default App;

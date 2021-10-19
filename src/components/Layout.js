import React, { useState, useEffect } from "react";

import Header from "../components/Header";
import Landing from "../components/Landing";

import Footer from "../components/Footer";

import "../styles/global.css";

const Layout = ({ children }) => {
  let [language, setLanguage] = useState("french");
  let languageToUse = "french";
  let languageInStorage = "";

  useEffect(() => {
    if (localStorage.getItem("languageInStorage")) {
      setLanguage(languageInStorage);
    }
  }, []);

  const childrenWithProps = React.Children.map(children, (child) =>
    React.cloneElement(child, {
      language,
      setLanguage,
      languageToUse,
    })
  );
  return (
    <div className="layout">
      <Header
        language={language}
        setLanguage={setLanguage}
        languageToUse={languageToUse}
      />
      <Landing />

      <section className="main">{childrenWithProps}</section>

      <Footer
        language={language}
        setLanguage={setLanguage}
        languageToUse={languageToUse}
      />
    </div>
  );
};

export default Layout;

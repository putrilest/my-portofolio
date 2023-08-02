import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { createContext, useEffect } from "react";
import { useState } from "react";

export const ThemeContext = createContext({
  theme: null,
  setTheme: () => {},
 });

 export const LanguageContext = createContext({
    language: null,
    setLanguage: () => {}
 })

 export const Strings = {
  en:{
    blog:"Blog",
    home:"Home",
    product:"Products",
    contact:"Contact",
    theme:"Theme",
    hello:"Hello, I am ",
  },
  id:{
    blog:"Profil",
    home:"Beranda",
    product:"Produk",
    contact:"Kontak",
    theme:"Tema",
    hello:"Hallo, Saya ",
  },
 }

export default function App() {
  const [theme, setTheme] = useState("light");
  const [language, setLanguage] = useState("en");

  useEffect(() => {
    console.log('Succesfully Changed the Theme!')
  }, [theme])

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <LanguageContext.Provider value={{language, setLanguage}}>
        <Header />
        <Outlet />
        <Footer />
      </LanguageContext.Provider>
    </ThemeContext.Provider>
  );
}

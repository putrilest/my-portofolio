import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { createContext } from "react";
import { useState } from "react";

export const ThemeContext = createContext({
  theme: null,
  setTheme: () => {},
 });

export default function App() {
  const [theme, setTheme] = useState("light")
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <Header />
      <Outlet />
      <Footer />
    </ThemeContext.Provider>
    // <>
    //   <Header />
    //   <Outlet />
    //   <Footer />
    // </>
  );
}

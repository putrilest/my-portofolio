/* eslint-disable react/no-unescaped-entities */
import {WiStars} from "react-icons/wi";
import {NavLink } from "react-router-dom";
import ThemeButton from "../components/ThemeButton";
import { useContext } from "react";
import { LanguageContext, ThemeContext } from "../App";
import { Strings } from "../App"; 
import {MdOutlineLanguage} from "react-icons/md";

const Header = () => {
  const {theme} = useContext(ThemeContext);
  const {language, setLanguage} = useContext(LanguageContext);

  return (
    <header className={theme === "dark" ? "bg-gray-800 text-white" : "bg-zinc-200"}>
      <div className="mx-0 border-solid border-b-[1px] border-zinc-400">
        <div className="flex justify-between text-center py-4 tablet:mx-2 tablet:py-3 mobile:mx-0 mobile:py-2">
            <div className="flex text-3xl font-bold tablet:text-2xl mobile:text-xl">
                <div><WiStars size={40}/></div>
                <div className="mobile:py-2">Lestari's <span className="text-red-400">{Strings[language].blog}</span></div>
            </div>
            <nav className="flex flex-row gap-2  tablet:text-base mobile:text-[0.7rem] mobile:gap-0 ">
                <NavLink to="/"><button className="p-2 rounded-3xl hover:bg-red-300 mobile:p-1 mobile:mt-2">{Strings[language].home}</button></NavLink>
                <span className="pt-2 mobile:pt-3">|</span>
                <NavLink to="/products"><button className="p-2 rounded-3xl hover:bg-orange-300 mobile:p-1 mobile:mt-2">{Strings[language].product}</button></NavLink>
                <span className="pt-2 mobile:pt-3">|</span>
                <NavLink to="/contact"><button className="p-2 rounded-3xl hover:bg-sky-300 mobile:p-1 mobile:mt-2">{Strings[language].contact}</button></NavLink>
                <span className="pt-2 mobile:pt-3">|</span>
                <button className="p-1 rounded-3xl hover:bg-gray-600 hover:text-white mobile:mt-2"><ThemeButton/></button>
                <span className="pt-2 mobile:pt-3">|</span>
                <button onClick={() => setLanguage(language === "en" ? "id" : "en")} className="p-2 rounded-3xl hover:bg-gray-600 hover:text-white mobile:mt-2 mr-2">
                  <MdOutlineLanguage className="h-5 w-5 mobile:pb-2"/>
                </button>
            </nav>
        </div>
      </div>
    </header>
  )
}

export default Header
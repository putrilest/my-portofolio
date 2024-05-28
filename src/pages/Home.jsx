/* eslint-disable react/no-unescaped-entities */
import {BsFillCircleFill} from "react-icons/bs"
import Products from "./Products"
import { useContext, useRef } from "react";
import {IoIosArrowDropupCircle} from "react-icons/io"
import { LanguageContext, ThemeContext } from "../App";
import { Strings } from "../App"; 


const Home = () => {
  const scrollRef = useRef(null);
  const {theme} = useContext(ThemeContext);
  const {language} = useContext(LanguageContext);

  const backToTopButton = () => {
    window.scrollTo({
      top:0,
      behavior:'smooth'
    })
  }

  return (
    <main className={theme === "dark" ? "bg-gray-800 text-white" : "bg-zinc-200"}>
      <div className="h-full">
        <div className="mx-36 flex pt-14 tablet:mx-12 mobile:mx-2 mobile:pt-4 mobile:block mobile:text-center">
          <div className="mobile:flex mobile:justify-center">
            <img className="rounded-full h-96 tablet:h-72 mobile:h-64 " src="./my-foto.png" alt="" />
          </div>
          <div className="pl-4 pt-12 tablet:pt-6 mobile:pt-4">
            <h1 className="font-bold text-5xl font-sans tablet:text-4xl mobile:text-3xl">{Strings[language].hello}<span className="text-red-400">Lestari👋</span></h1>
            <div className="text-xl font-bold font-mono tablet:text-lg mobile:text-base">Junior Backend Developer</div> <br />
            <div className="font-bold text-xl font-mono tablet:text-lg mobile:text-base">A Bit About Me</div>
            <div className="tablet:text-sm mobile:text-xs">
              As a junior backend developer, i'm enthusiastic and aspiring <br />
              in the field of software development, focusing on the backend or  <br />
              server-side of web applications. I have a solid understanding of   <br /> 
              programming concepts and have likely gained knowledge in backend  <br />
              technologies such as server frameworks, databases, and API integrations.
            </div>
            <div className="flex text-4xl tablet:text-3xl mobile:text-2xl mobile:justify-center">
              <div className="text-red-400 pt-3"><BsFillCircleFill/></div>
              <div className="text-orange-300 pt-3 px-2"><BsFillCircleFill/></div>
              <div className="text-sky-300 pt-3"><BsFillCircleFill/></div>
            </div>
          </div>
        </div>
        <Products/>
      </div>
      <div className="flex justify-center text-center items-center pb-2">
        <button className="flex flex-row gap-1 p-2 rounded-3xl hover:bg-red-400 mobile:p-1 mobile:mt-2" ref={scrollRef} onClick={()=> backToTopButton()}><IoIosArrowDropupCircle size={25}/> Back to Top</button>
      </div>
    </main>
  )
}

export default Home
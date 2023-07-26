import { ThemeContext } from "../App";
import { useContext } from "react";

const Footer = () => {
  const {theme} = useContext(ThemeContext);
  return (
    <footer className={theme === "dark" ? "bg-gray-800 text-white" : "bg-zinc-200"}>
      <div className="flex flex-row gap-4 py-4 px-8 bottom-0  border-solid border-t-[1px] border-zinc-400 justify-between item-center tablet:text-sm mobile:text-[0.6rem] tablet:px-2 mobile:px-2 mobile:gap-2">
        <div>
          <h3 className="font-bold">Phone</h3>
          <p className="text-xs mobile:text-[0.50rem]">088-220-1764</p>
        </div>
        <div>
          <h3 className="font-bold">Email</h3>
          <a className="text-xs mobile:text-[0.50rem]" href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox">putriles203@gmail.com</a>
        </div>
        <div>
          <h3 className="font-bold">Follow Me In</h3>
          <div className="flex">
            <a href="https://m.facebook.com/phutri.lhestary.1" target="blank"><img className="w-4 h-4 mobile:w-3 mobile:h-3" src="facebook.png" alt="" /></a>
            <a href="https://instagram.com/putril.lstr?igshid=MzNlNGNkZWQ4Mg==" target="blank"><img className="w-4 h-4 mx-3 mobile:w-3 mobile:h-3" src="instagram.png" alt="" /></a>
            <a href="https://github.com/putrilest" target="blank"><img className="w-4 h-4 mobile:w-3 mobile:h-3" src="github-.png" alt="" /></a>
          </div>
        </div>
        <div className="font-bold">
          &copy; Copyright 2023 By <span className="text-red-400">PutriLestari</span>
        </div>
      </div>
    </footer>
    
  )
}

export default Footer
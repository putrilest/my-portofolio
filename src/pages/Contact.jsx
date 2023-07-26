import { useContext } from "react";
import { ThemeContext } from "../App";

const Contact = () => {
  const {theme} = useContext(ThemeContext);
  return (
    <div className={theme === "dark" ? "bg-gray-800 text-white" : "bg-zinc-200"}>
      <div className="h-[565px] px-2 pt-6 font-serif">
        <div className="font-bold  text-3xl">Contact</div>
        <div>Looking forward to hearing from you</div> <br />
        <div  className="font-bold  text-2xl">Phone</div>
        <div>088 220 176 443</div> <br />
        <div className="font-bold  text-2xl">Email</div>
        <div>putriles203@gmail.com</div> <br />
        <div className="font-bold  text-2xl"> Follow Me in</div>
        <div className="flex">
          <a href="https://m.facebook.com/phutri.lhestary.1" target="blank"><img className="w-10 h-10" src="facebook.png" alt="" /></a>
          <a href="https://instagram.com/putril.lstr?igshid=MzNlNGNkZWQ4Mg==" target="blank"><img className="w-10 h-10 mx-3" src="instagram.png" alt="" /></a>
          <a href="https://github.com/putrilest" target="blank"><img className="w-10 h-10" src="github-.png" alt="" /></a>
        </div>
      </div>
    </div>
  )
}

export default Contact
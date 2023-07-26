import { useContext } from "react";
import { ThemeContext } from "../App";
import {MdDarkMode} from "react-icons/md"

const ThemeButton = () => {
    const { theme, setTheme } = useContext(ThemeContext);
    return (
        <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
            <div className="flex"><MdDarkMode className="h-5 w-5 mobile:h-4 mobile:w-4 "/>Theme</div>
        </button>
    )
}

export default ThemeButton
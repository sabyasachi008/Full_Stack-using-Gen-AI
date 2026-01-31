import { useContext } from "react";
import { ThemeContext } from "./ThemeContext"

export default function NavBar() {
    const {theme, setTheme } = useContext(ThemeContext);

    return (
        <div className={theme}>
            <p>
                Theme : {theme}
            </p>
            <button onClick={()=> setTheme(theme === "light" ? "dark" : "light")}>
                Toggle Theme
            </button>
        </div>
    )
}
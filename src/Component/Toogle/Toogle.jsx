import React from 'react'
import { IoMoon } from "react-icons/io5";
import { IoSunny } from "react-icons/io5";
import { IconContext } from "react-icons";

export default function Toogle() {
    const [dark, setDark] = React.useState(false);

    const darkModeHandler = () => {
        setDark(!dark);
        document.body.classList.toggle("dark");
    }
    return ( 
        <div>
            <button className="fixed bottom-4 right-4 ml-4 bg-gray-300 dark:bg-white rounded-full p-2 shadow-md z-10" onClick={() => darkModeHandler()}>
                {
                    dark && <IoSunny /> // render sunny when dark is true
                }
                {
                    !dark && <IoMoon /> // render moon when dark is false
                }
            </button>
        </div>
    )
}

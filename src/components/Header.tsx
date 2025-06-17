import Github from "../icons/Github"
import IconLink from "./IconLink"
import Linkedin from "../icons/Linkedin"
import ToggleTheme from "./ToggleTheme"
import { ChefHat } from "lucide-react";


const Header = () => {
    return (
        <header className="sticky top-0 z-50 backdrop-blur-md w-full md:w-3/4  px-10 py-5 rounded-4xl ">
            <nav className="flex items-center justify-between">
                <div className="flex flex-row gap-[1px] items-center justify-between
                                w-fit
                ">
                    <ChefHat className="w-5 h-5"/>
                    <p className="text-xs md:text-2xl font-medium ml-1">
                        <a href="#">
                            Chef Cloude
                        </a>
                    </p>
                </div>
                <div className="w-fit flex items-center divide-x-2 divide-dashed">

                    <div className="w-fit flex flex-row gap-2 items-center justify-center pr-4">
                        <IconLink link="#" children={<Github/>} />
                        <IconLink link="#" children={<Linkedin/>} />
                    </div>
                    <div className="pl-4 flex flex-row items-center justify-center gap-2">
                        <ToggleTheme/>
                    </div>
                </div>
            </nav>
        </header>
    )
}
export default Header

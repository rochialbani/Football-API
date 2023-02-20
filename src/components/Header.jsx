import { RiSearchLine} from "react-icons/ri"

const Header = () =>{
    return(
        <header className="bg-secondary-900 h-[7vh] md:h-[10vh] p-8 border-b border-secondary-100 flex items-center justify-end">
            <nav >live</nav>
            <div className="ml-5 flex items-center">
                <form className="relative">
                <RiSearchLine className="absolute text-gray-300 mt-3 ml-2"/>
                    <input type="text" placeholder= "teams..." className="bg-secondary-100 outline-none text-gray-300 rounded-full py-2 pl-8 pr-4"/>
                </form>
            </div>
        </header>
    )
};

export default Header;
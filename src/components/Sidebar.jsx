import { Link } from "react-router-dom";


const Sidebar = () =>{
    return(
        <aside className="bg-secondary-100 p-8 ">
            <div>
                <h1 className="text-2xl text-center font-bold text-white mb-8"><a href="/#home">Football<span className="text-primary text-4xl">.</span></a> </h1>
                <ul>
                    <li><Link to='/fixture' className="flex items-center mb-2 font-bold gap-4 py-3 px-2 rounded-lg hover:bg-secondary-900 transition-colors ">Fixture</Link></li>
                    <li><Link to='/groups' className="flex items-center mb-2 font-bold py-3 px-2 rounded-lg hover:bg-secondary-900 transition-colors">Groups</Link></li>
                    <li><Link to='/teams' className="flex items-center mb-2 font-bold py-3 px-2 rounded-lg hover:bg-secondary-900 transition-colors">Teams</Link></li>
                    
                </ul>
            </div>
        </aside>   
    )
};

export default Sidebar;
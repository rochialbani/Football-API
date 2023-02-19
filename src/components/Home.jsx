import Sidebar from "./Sidebar";
import Header from "./Header";
import data from "../data.json"
import noData from "../no-data.json"


const Home = () =>{
    const info = data.response
    const hasInfo = info?.length > 0

    return(
        <div class="main-home">
            <Header/>
            <div> 
                <Sidebar/>
            </div>
            <p>home</p>
            {/*<main>
                {
                    hasInfo?(
                        <ul>
                            {
                                info.map(info => (
                                    
                                        <img src={info.league.logo} alt="" />
                                        
                                ))
                            }
                        </ul>
                    )
                    : (
                        <p>No hay resultados</p>
                    )
                }
            </main>*/}
        </div>
        
    )
};

export default Home;

import data from "../data.json"
import noData from "../no-data.json"


const Home = () =>{
    const info = data.response
    const hasInfo = info?.length > 0

    return(
        <div className="bg-secondary-900 h-[90vh] overflow-y-scroll p-8">
            
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
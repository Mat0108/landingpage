import produit1 from "../images/produit1.png"
import produit2 from "../images/produit2.png"
import produit3 from "../images/produit3.png"
import buy from "../images/buy.png"
const Produit =()=>{
    
    return (
        <div className="relative w-full h-fit grid grid-row-2 mt-[10px] mt-[50px]">
            <div className="row-start-1 flex flex-col center">
                <p className="text-blue text-[30px] font-av-bold">Les iconiques...</p>
                <p>Découvrez notre gamme “Iconiques” avec nos produits incontournables, recommandés par notre fidèle communauté </p>
            </div>
            <div className="mx-auto w-[90%] row-start-2 grid grid-cols-3">
                <div className="col-start-1 w bg-[#DEE4E4] flex justify-start">
                    <div className="flex flex-col ">
                        <div className="ml-[30px] mt-[60px]"> <img src={produit1}  /></div>        
                        <p className="ml-[30px] mt-[35px] text-[40px] font-av-bold text-blue text-left">Sérum Yeux</p>
                        <p className="ml-[30px] mt-[20px] text-[10px] text-left w-[300px]">Caféine 5% + Niacinamide 5%</p>
                        <p className="ml-[30px] mt-[10px] text-[10px] text-left w-[300px]">Favorise la microcirculation sanguine et lymphatique pour atténuer les cernes.  </p>
                        <div className="w-full ml-[30px] mt-[30px] flex flex-row">
                            <div className="w-[40px] ml-[10px]"> <img src={buy}  /></div>        
                            <div className="ml-[10px] text-[10px] w-fit px-4 py-2 bg-[#E4DDD3] rounded-2xl font-av-bold text-blue text-left"><p>en savoir plus</p></div>    
                        </div>
                    </div>
                </div>
                <div className="col-start-2 w bg-[#DEE4E4] flex justify-start">
                    <div className="flex flex-col ">
                        <div className="ml-[30px] mt-[60px]"> <img src={produit2}  /></div>        
                        <p className="ml-[30px] mt-[35px] text-[30px] font-av-bold text-blue text-left">Assemblage botanique tenseurau nopal</p>
                        <p className="ml-[30px] mt-[20px] text-[10px] text-left w-[300px]">7 extraits botaniques pour tonifier et régénérer la peau pendant la nuit. Sérum de nuit visage et cou.</p>
                        <div className="w-full ml-[30px] mt-[30px] flex flex-row">
                            <div className="w-[40px] ml-[10px]"> <img src={buy}  /></div>        
                            <div className="ml-[10px] text-[10px] w-fit px-4 py-2 bg-[#E4DDD3] rounded-2xl font-av-bold text-blue text-left"><p>en savoir plus</p></div>    
                        </div>
                    </div>
                </div>
                <div className="col-start-3 w bg-[#DEE4E4] flex justify-start">
                    <div className="flex flex-col ">
                        <div className="ml-[30px] mt-[60px]"> <img src={produit3}  /></div>        
                        <p className="ml-[30px] mt-[35px] text-[40px] font-av-bold text-blue text-left">Gel nettoyant exfoliant</p>
                        <p className="ml-[30px] mt-[20px] text-[10px] text-left w-[300px]">PHA 5% + aloe vera</p>
                        <p className="ml-[30px] mt-[10px] text-[10px] text-left w-[300px]">Micro-exfolie la peau et stimule le renouvellement cellulaire pour désincruster les pores et unifier le teint.</p>
                        <div className="w-full ml-[30px] mt-[30px] flex flex-row">
                            <div className="w-[40px] ml-[10px]"> <img src={buy}  /></div>        
                            <div className="ml-[10px] text-[10px] w-fit px-4 py-2 bg-[#E4DDD3] rounded-2xl font-av-bold text-blue text-left"><p>en savoir plus</p></div>    
                        </div>
                    </div>
                </div>
            </div>

            {/* <div className="col-start-1 w bg-[#DEE4E4] flex justify-start">
                <div className="flex flex-col ">
                    <p className="ml-[30px] mt-[105px] text-[40px] font-av-bold text-blue text-left">A propos...</p>
                    <p className="ml-[30px] mt-[20px] text-[10px] text-left w-[600px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                    <div className="ml-[30px] mt-[20px] text-[30px] w-fit px-8 py-2 bg-[#E4DDD3] rounded-2xl font-av-bold text-blue text-left"><p>en savoir plus</p></div>
                    <div className="w-[600px] ml-[30px] mt-[60px]"> <img src={visageimage1}  /></div>        
                </div>
            </div>
            <div className="col-start-2 w bg-[#DEE4E4] flex justify-start">
                <div className="flex flex-col ">
                    <div className="w-[600px] ml-[30px] mt-[80px]"> <img src={visageimage2}  /></div>        
                    <p className="ml-[30px] mt-[20px] text-[10px] text-left w-[600px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    <p className="ml-[30px] mt-[20px] text-[10px] text-left w-[600px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                    <div className="ml-[30px] mt-[40px] text-[30px] w-fit px-8 py-2 bg-[#E4DDD3] rounded-2xl font-av-bold text-blue text-left"><p>en savoir plus</p></div>
                    
                </div>
                

            </div>
             */}
        </div>
        
    )
}
export default Produit
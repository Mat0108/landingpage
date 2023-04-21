import fleche from "../images/fleche.png"
const Newsletter =()=>{
    return (<>
        <div className="relative w-full h-[360px] grid grid-cols-5 bg-[#D5CDC2]">
            <div className="col-start-1 col-span-2 flex flex-col center ">
                <p className="text-[30px]">NEWSLETTER</p>
                <p className="w-[300px] ml-[30px]">Suivez notre actualité et ne manquez aucune de nos nouveautés en vous inscrivant à notre newsletter </p>
            </div>
            <div className="col-start-3 col-span-3 flex flex-col center ">
                <p className="text-[30px] w-[300px]">Votre adresse mail:</p>
                <div className="flex flex-row">
                    <input className="w-[600px] bg-[#D5CDC2] border-b-2 mt-5" placeholder="votre mail " ></input>
                    <div className="mt-[20px] w-[40px] ml-[10px] flex center border-2 " > <img src={fleche}  /></div> 
                </div>
            </div>
        </div>
        </>
    )
}
export default Newsletter
import visageimage from "../images/visage1.png"
const Visage1 =()=>{
    return (<>
        <div className="relative w-full h-fit ">
            <div className='w-full flex center'><img src={visageimage}  /></div>
            <div className="absolute z-[1000] top-[300px] w-full h-[30px] text-white_coffee font-av-bold text-[70px] flex center"><p className="">DECOUVREZ VOTRE PEAU</p></div>
            <div className="absolute z-[1000] top-[550px] w-full h-[60px] text-white_coffee text-[50px] flex center"><p className="w-[50%] py-2 bg-blue rounded-3xl">FAIRE MON DIAGNOSTIC </p> </div>
            <div className="absolute z-[1000] top-[680px] w-full h-[60px] text-white_coffee text-[15px] flex center"><p className="w-[70%]">En complétant ce formulaire, vous autorisez xx à utiliser vos données personnelles, à vous adresser des offres et communications  par Po. email ou par SMS En savoir plus </p> </div>
        
        </div>
  
    </>
    )
}
export default Visage1
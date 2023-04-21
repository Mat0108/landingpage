import visageimage1 from "../images/visage3.png"
import visageimage2 from "../images/visage4.png"
const Visage3 =()=>{
    return (
        <>
        <div className="relative w-full h-0.5 mt-[30px] bg-[#10264C4D]"></div>
        <div className="relative w-full h-fit grid grid-cols-2 mt-[20px] ">
            <div className="ml-[20px] col-start-1 w bg-[#DEE4E4] flex justify-start">
                <div className="flex flex-col ">
                    <p className="ml-[30px] mt-[35px] text-[40px] font-av-bold text-blue text-left">A propos...</p>
                    <p className="ml-[30px] mt-[20px] text-[10px] text-left w-[400px]">Nous avons choisi de collaborer avec des experts facialistes pour VOUS !</p>
                    <p className="ml-[30px] text-[10px] text-left w-[400px]">Pour que vous puissez bénéficier d’un diagnostic fiable et personnalisé.</p>
                    <p className="ml-[30px] text-[10px] text-left w-[400px]">Vous pourrez donc vous orienter vers ce dont vous avez réellement besoin.</p>
                    <div className="ml-[30px] mt-[20px] text-[30px] w-fit px-8 py-2 bg-[#E4DDD3] rounded-2xl font-av-bold text-blue text-left"><p>en savoir plus</p></div>
                    <div className="w-[600px] ml-[30px] mt-[60px]"> <img src={visageimage1}  /></div>        
                </div>
            </div>
            <div className="col-start-2 w bg-[#DEE4E4] flex justify-start">
                <div className="ml-[60px] flex flex-col ">
                    <div className=" ml-[30px] mt-[10px]"> <img src={visageimage2}  /></div>        
                    <p className="ml-[30px] mt-[20px] text-[10px] text-left "> En plus de pouvoir bénéficier d’un savoir-faire hors-pair, profitez également d’une technologie hors-pair !</p>
                    <p className="ml-[30px] mt-[20px] text-[10px] w-[400px] text-left ">L’Intelligence Artificielle saura parfaire votre diagnostic afin de le rendre encore   plus précis !
Un simple selfie servira à déterminer la ligne directrice de votre diagnostic.</p>
                    <div className="ml-[30px] mt-[40px] text-[30px] w-fit px-8 py-2 bg-[#E4DDD3] rounded-2xl font-av-bold text-blue text-left"><p>en savoir plus</p></div>
                    
                </div>
                

            </div>
            
        </div>
        <div className="relative w-full h-0.5 mt-[50px] bg-[#10264C4D]"></div>
        </>
        
    )
}
export default Visage3
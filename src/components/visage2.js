import visageimage from "../images/visage2.png"
const Visage2 =()=>{
    return (
        <div className="relative w-full h-fit grid grid-cols-2 mt-[40px] ">
            <div className="col-start-1 w bg-[#DEE4E4] flex center justify-start">
                <div className="flex flex-col ">
                    <p className="ml-[30px] text-[50px] font-av-bold text-blue text-left">Po.</p>
                    <p className="ml-[30px] text-[40px] font-av-bold text-blue text-left">pour une belle peau</p>
                    <p className="ml-[30px] mt-[30px] text-[14px] text-left w-[500px]">
                    Chez Po. nous sommes convaincus que prendre soin de sa peau devrait être à la portée de tous et de toutes.
                    C’est pour cela que nous voulons rendre accessible les soins, les conseils, les expertises.
                    </p><p className="ml-[30px] mt-[30px] text-[14px] text-left w-[500px]">
                    Nous sommes fiers de mettre à votre disposition des formules de soins cleans et de vous mettre en contact avec  nos partenaires expert dans les problèmes de peaux. 
                    </p>
                </div>
                

            </div>
            <div className="col-start-2 ml-[30px] "> <img src={visageimage}  /></div>
        </div>
        
    )
}
export default Visage2
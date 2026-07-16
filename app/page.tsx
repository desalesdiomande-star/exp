import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-[#F9F1F0]">
      <header className="bg-[#FADCD9] rounded-lg h-[12vh] m-4  flex items-center justify-between ">

        {/* Partie gauche */}
        <div className="text-lg  px-6 font-[Gilroy] ">
          JULIAN <span className="font-bold">HUANG</span>
        </div>

        {/* Partie droite */}
        <div className="flex gap-8 px-2">
          <div>PROJECT</div>
          <div>ABOUT</div>
          <div>CONTACT</div>
        </div>   
      </header>
      
 {/* Le grand body */}

      <div className="grid gap-5 grid-cols-[2fr_1fr] max-w-full p-5" >
       
        <div className="grid grid-cols-[6.5fr_3.5fr] grid-rows-1 col-span-1 row-span-1 rounded-lg  gap-5 h-[60vh]">
          
          <div className="bg-[#FADCD9] rounded-lg flex flex-col items-center justify-center gap-5 relative">
            <Image src="/FLOWER ICON.png" alt="fleur" width={50} height={50} className="absolute top-4 right-4" />
            <p className="text-left font-[Gilroy] text-5xl px-4 absolute bottom-7" >
               Artist Redefining <span className="font-bold"> Architecture </span>with AI-Driven Design
            </p>
          </div>
          
          <div className="bg-[#FADCD9] rounded-lg flex items-center justify-center relative">
            <Image src="/PORTRAIT.png" alt="portrait" fill className="object-cover rounded-lg" />
          </div>
          
        </div>
        
        
        <div className="grid grid-cols-1 grid-rows-[8.7fr_1.3fr] col-span-1 row-span-2 rounded-lg  gap-5">
          
          <div className="bg-[rgb(250,220,217)]  col-span-1 row-span-1  rounded-lg flex flex-col relative">
            <Image src="/ITEM 1.png" alt="salle"  width={400} height={400} className="w-min-[400px] h-min-[350px] p-2.5" />
            <div className=" text-xl pl-4 m-3">Elara</div>
            <div className=" text-xl p-4 m-4 border-t-2 border-[#F8AFA6]">Verve</div>
            <div className=" text-xl p-4 m-4 border-t-2 border-[#F8AFA6]">Zephyr</div>

          </div>

          <div className="bg-[#FADCD9] text-xs rounded-lg flex items-center justify-between m-2.5 px-3 ">
            <div>INSTAGRAM</div>
            <div>TWITTER</div>
            <div>LINKEDIN</div>
          </div>
        </div>

        <div className="grid grid-cols-2 grid-rows-1 col-span-1 row-span-1 rounded-lg gap-5 h-[60vh]">
          
          <div className="bg-[#FADCD9]  col-span-1 row-span-1  rounded-lg flex items-center justify-center relative">
            <Image src="/CIRCLE ICON.png" alt="circle" width={100} height={100} className=" w-10 h-10 absolute top-4 left-4" />
            <p className="text-left font-[Gilroy] text-lg px-4 mr-15 absolute bottom-7" >
              Julia Huang is an innovative AI artist, 
              renowned for blending cutting-edge technology
               with creative expression. Based in LA,
                she crafts unique digital art experiences
                 accessible globally.
            </p>
          </div>
         
          <div className="bg-[#F8AFA6]  cols-span-2 row-span-1  rounded-lg flex flex-col  relative gap-5">
            <p className="text-left font-[Gilroy] text-sm px-4 mr-15 top-4 left-4 absolute" >
              Have some <br /> questions?
            </p>
            <Image src="/ARROW.png" alt="fleche" width={100} height={100} className="absolute top-4 right-4 w-12 h-12" />
            <p className="text-center font-[Gilroy] text-5xl font-bold bottom-10 absolute left-4">Contact me</p>
          </div>

        </div>


      </div>
    </div>

  );

}

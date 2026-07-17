import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-[#F9F1F0]">
      <header className="bg-[#FADCD9] rounded-lg h-auto min-h-[10vh] sm:h-[12vh] m-2 sm:m-4 flex flex-wrap items-center justify-between gap-2 py-3 sm:py-0">

        {/* Partie gauche */}
        <div className="text-sm sm:text-base md:text-lg px-3 sm:px-6 font-[Gilroy]">
          JULIAN <span className="font-bold">HUANG</span>
        </div>

        {/* Partie droite */}
        <div className="flex gap-3 sm:gap-5 md:gap-8 px-2 text-xs sm:text-sm md:text-base">
          <div>PROJECT</div>
          <div>ABOUT</div>
          <div>CONTACT</div>
        </div>
      </header>

      {/* Le grand body */}

      <div className="grid gap-3 sm:gap-4 md:gap-5 grid-cols-1 lg:grid-cols-[2fr_1fr] max-w-full p-2 sm:p-3 md:p-5">

        <div className="grid grid-cols-1 lg:grid-cols-[6.5fr_3.5fr] grid-rows-2 lg:grid-rows-1 lg:col-span-1 lg:row-span-1 rounded-lg gap-3 sm:gap-4 md:gap-5 h-auto lg:h-[60vh]">

          <div className="bg-[#FADCD9] rounded-lg flex flex-col items-center justify-center gap-2 sm:gap-3 md:gap-5 relative h-[35vh] sm:h-[45vh] lg:h-auto">
            <Image src="/FLOWER ICON.png" alt="fleur" width={50} height={50} className="absolute top-2 right-2 sm:top-3 sm:right-3 md:top-4 md:right-4 w-6 h-6 sm:w-9 sm:h-9 md:w-[50px] md:h-[50px]" />
            <p className="text-left font-[Gilroy] text-base sm:text-2xl md:text-4xl lg:text-5xl px-2 sm:px-3 md:px-4 absolute bottom-2 sm:bottom-4 md:bottom-7">
              Artist Redefining <span className="font-bold"> Architecture </span>with AI-Driven Design
            </p>
          </div>

          <div className="bg-[#FADCD9] rounded-lg flex items-center justify-center relative h-[35vh] sm:h-[45vh] lg:h-auto">
            <Image src="/PORTRAIT.png" alt="portrait" fill className="object-cover rounded-lg" />
          </div>

        </div>


        <div className="grid grid-cols-1 grid-rows-[auto_auto] lg:grid-rows-[8.7fr_1.3fr] lg:col-span-1 lg:row-span-2 rounded-lg gap-3 sm:gap-4 md:gap-5">

          <div className="bg-[rgb(250,220,217)] col-span-1 row-span-1 rounded-lg flex flex-col relative">
            <Image src="/ITEM 1.png" alt="salle" width={400} height={400} className="w-min-[400px] h-min-[350px] p-1 sm:p-2 md:p-2.5" />
            <div className="text-xs sm:text-base md:text-xl pl-2 sm:pl-3 md:pl-4 m-1.5 sm:m-2 md:m-3">Elara</div>
            <div className="text-xs sm:text-base md:text-xl p-2 sm:p-3 md:p-4 m-1.5 sm:m-2 md:m-4 border-t-2 border-[#F8AFA6]">Verve</div>
            <div className="text-xs sm:text-base md:text-xl p-2 sm:p-3 md:p-4 m-1.5 sm:m-2 md:m-4 border-t-2 border-[#F8AFA6]">Zephyr</div>

          </div>

          <div className="bg-[#FADCD9] text-[10px] sm:text-xs rounded-lg flex items-center justify-between m-1.5 sm:m-2 md:m-2.5 px-2 sm:px-3">
            <div>INSTAGRAM</div>
            <div>TWITTER</div>
            <div>LINKEDIN</div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 grid-rows-2 lg:grid-rows-1 lg:col-span-1 lg:row-span-1 rounded-lg gap-3 sm:gap-4 md:gap-5 h-auto lg:h-[60vh]">

          <div className="bg-[#FADCD9] lg:col-span-1 lg:row-span-1 rounded-lg flex items-center justify-center relative h-[35vh] sm:h-[45vh] lg:h-auto">
            <Image src="/CIRCLE ICON.png" alt="circle" width={100} height={100} className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 absolute top-2 left-2 sm:top-3 sm:left-3 md:top-4 md:left-4" />
            <p className="text-left font-[Gilroy] text-[10px] sm:text-sm md:text-lg px-2 sm:px-3 md:px-4 mr-4 sm:mr-8 md:mr-15 absolute bottom-2 sm:bottom-4 md:bottom-7">
              Julia Huang is an innovative AI artist,
              renowned for blending cutting-edge technology
              with creative expression. Based in LA,
              she crafts unique digital art experiences
              accessible globally.
            </p>
          </div>

          <div className="bg-[#F8AFA6] lg:cols-span-2 lg:row-span-1 rounded-lg flex flex-col relative gap-2 sm:gap-3 md:gap-5 h-[35vh] sm:h-[45vh] lg:h-auto">
            <p className="text-left font-[Gilroy] text-[10px] sm:text-xs md:text-sm px-2 sm:px-3 md:px-4 mr-4 sm:mr-8 md:mr-15 top-2 left-2 sm:top-3 sm:left-3 md:top-4 md:left-4 absolute">
              Have some <br /> questions?
            </p>
            <Image src="/ARROW.png" alt="fleche" width={100} height={100} className="absolute top-2 right-2 sm:top-3 sm:right-3 md:top-4 md:right-4 w-7 h-7 sm:w-9 sm:h-9 md:w-12 md:h-12" />
            <p className="text-center font-[Gilroy] text-lg sm:text-3xl md:text-4xl lg:text-5xl font-bold bottom-3 sm:bottom-6 md:bottom-10 absolute left-2 sm:left-3 md:left-4">Contact me</p>
          </div>

        </div>


      </div>
    </div>

  );

}

export default function Featured() {
  return (
    <div className="p-[32px]">
      <div className="events pb-10">
        <h1 className="pb-[16px] font-bold italic text-orange-400 max-sm:text-[28px] sm:text-[32px] md:text-[36px] lg:text-[40px] xl:text-[48px]">
          EVENTS
        </h1>
        <hr className="border-orange-400" />
        <div className="text-center drop-shadow-[0_0_1.25rem_rgba(255,255,255,1)] max-sm:p-[30px] sm:px-[50px] sm:py-[40px] md:px-[80px] md:py-[50px]">
          <div>
            <img src="static/images/home/featured_bg.png" className="relative" />
            <div className="absolute bottom-1/2 max-sm:left-[30px] sm:left-[50px] md:left-[80px] lg:left-[100px]">
              <button className="sm:text-[40px] md:text-[50px] lg:text-[45px] xl:text-[45px] 2xl:text-[72px]">
                {'<'}
              </button>
            </div>
            <div className="absolute bottom-1/2 max-sm:right-[30px] sm:right-[50px] md:right-[80px] lg:right-[100px]">
              <button className="sm:text-[40px] md:text-[50px] lg:text-[45px] xl:text-[45px] 2xl:text-[72px]">
                {'>'}
              </button>
            </div>
            <div
              className="flex h-[65px] space-x-3 border-2 border-solid border-white bg-orange-400 pl-[10px]"
              style={{ alignItems: 'center', textAlign: 'center' }}
            >
              <div className="font-bold uppercase text-black max-sm:text-[10px] md:text-[18px] lg:text-[25px] xl:text-[28px] 2xl:text-[40px]">
                $10,000 R6 summer series
              </div>
              <div className=" uppercase text-white max-sm:text-[8px] lg:text-[16px] xl:text-[20px] 2xl:text-[25px]">
                pc - r6 - open qualifiers |
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="teams py-[32px]">
        <h1 className="pb-[16px] font-bold italic text-orange-400 max-sm:text-[28px] sm:text-[32px] md:text-[36px] lg:text-[40px] xl:text-[48px]">
          TEAMS
        </h1>
        <hr className="border-orange-400" />
        <div className="pt-3 text-center text-[18px]">No teams have been featured yet.</div>
      </div>
      <div className="teams py-[32px]">
        <h1 className="pb-[16px] font-bold italic text-orange-400 max-sm:text-[28px] sm:text-[32px] md:text-[36px] lg:text-[40px] xl:text-[48px]">
          players
        </h1>
        <hr className="border-orange-400" />
        <div className="pt-3 text-center text-[18px]">No teams have been featured yet.</div>
      </div>
    </div>
  );
}

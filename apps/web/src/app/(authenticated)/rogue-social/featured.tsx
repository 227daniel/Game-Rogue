export default function Featured() {
  return (
    <div className="p-[32px]">
      <div className="events pb-10">
        <h1 className="pb-[16px] text-[48px] font-bold italic text-orange-400">EVENTS</h1>
        <hr className="border-orange-400" />
        <div className="px-[80px] py-[50px] text-center drop-shadow-[0_0_1.25rem_rgba(255,255,255,1)]">
          <div>
            <img src="static/images/home/featured_bg.png" className="relative" />
            <div className="absolute bottom-[450px] left-[100px]">
              <button className="text-[72px]">{'‹'}</button>
            </div>
            <div className="absolute bottom-[450px] right-[100px]">
              <button className="text-[72px]">{'›'}</button>
            </div>
            <div
              className="flex h-[65px] space-x-3 border-2 border-solid border-white bg-orange-400 pl-[10px]"
              style={{ alignItems: 'center', textAlign: 'center' }}
            >
              <div className="text-[40px] font-bold uppercase text-black">
                $10,000 R6 summer series
              </div>
              <div className=" text-[25px] uppercase text-white">pc - r6 - open qualifiers |</div>
            </div>
          </div>
        </div>
      </div>
      <div className="teams py-[32px]">
        <h1 className="pb-[16px] text-[48px] font-bold italic text-orange-400">TEAMS</h1>
        <hr className="border-orange-400" />
        <div className="pt-3 text-center text-[18px]">No teams have been featured yet.</div>
      </div>
      <div className="teams py-[32px]">
        <h1 className="pb-[16px] text-[48px] font-bold uppercase italic text-orange-400">
          players
        </h1>
        <hr className="border-orange-400" />
        <div className="pt-3 text-center text-[18px]">No teams have been featured yet.</div>
      </div>
    </div>
  );
}

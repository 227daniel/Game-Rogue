


// import React from 'react';

// export default function Te() {
//   return (
//     <div className="py-[32px]">

//     </div>
//   );
// }

import { RightOutlined } from '@ant-design/icons';
import React, { useState } from "react";
import CreateTeam from "../../../components/rogue-social/createteam";
import JoinTeam from "../../../components/rogue-social/jointeam";
import ManageTeams from "../../../components/rogue-social/manageteam";

const Team: React.FC = () => {
  const [tabs, setTabs] = useState<string>("create");

  return (
    <div className="flex flex-1 h-full">
      <div className="bg-gradient w-[280px] h-full border-r-[1px] border-r-[#ffffff1f]">
        <div onClick={() => setTabs("create")} className={`items-center w-[280px] min-h-[72px] font-normal text-[0.875rem] cursor-pointer hover:bg-[#00000033] uppercase flex justify-between py-[9px] px-[16px] ${tabs === "create" ? " text-[#f5831f]" : " text-[#ffffffb3]"}`}>
          <div>create Team</div>
          <div><RightOutlined /></div>
        </div>
        <div onClick={() => setTabs("manage")} className={`items-center w-[280px] min-h-[72px] font-normal text-[0.875rem] cursor-pointer hover:bg-[#00000033] uppercase flex justify-between py-[9px] px-[16px] ${tabs === "manage" ? " text-[#f5831f]" : " text-[#ffffffb3]"}`}>
          <div>manage Team</div>
          <div><RightOutlined /></div>
        </div>
        <div onClick={() => setTabs("join")} className={`items-center w-[280px] min-h-[72px] font-normal text-[0.875rem] cursor-pointer hover:bg-[#00000033] uppercase flex justify-between py-[9px] px-[16px] ${tabs === "join" ? " text-[#f5831f]" : " text-[#ffffffb3]"}`}>
          <div>join Team</div>
          <div><RightOutlined /></div>
        </div>
      </div>
      <div className="w-full">
        {tabs === "join" && <JoinTeam />}
        {tabs === "manage" && <ManageTeams />}
        {tabs === "create" && <CreateTeam />}
      </div>
    </div>
  );
}

export default Team;


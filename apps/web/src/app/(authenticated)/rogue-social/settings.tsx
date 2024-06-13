import { RightOutlined } from '@ant-design/icons';
import React, { useState } from 'react';
import AccountSettings from '../../../components/rogue-social/accountsetting';
import Featured from '../../../components/rogue-social/featured';
import Privacy from '../../../components/rogue-social/privacy';
import Security from '../../../components/rogue-social/security';

const Settings: React.FC = () => {
  const [tabs, setTabs] = useState<string>("create");

  const onChange = (key: string | string[]) => {
    console.log(key);
  };

  return (
    <div className="flex h-full flex-1">
      <div className="bg-gradient h-full w-[280px] border-r-DEFAULT border-r-[#ffffff1f]">
        <div onClick={() => setTabs("featured")} className={`flex min-h-[72px] w-[280px] cursor-pointer items-center justify-between px-[16px] py-[9px] text-[0.875rem] font-normal uppercase hover:bg-[#00000033] ${tabs === "featured" ? " text-[#f5831f]" : " text-[#ffffffb3]"}`}>
          <div>featured</div>
          <div><RightOutlined /></div>
        </div>
        <div onClick={() => setTabs("security")} className={`flex min-h-[72px] w-[280px] cursor-pointer items-center justify-between px-[16px] py-[9px] text-[0.875rem] font-normal uppercase hover:bg-[#00000033] ${tabs === "security" ? " text-[#f5831f]" : " text-[#ffffffb3]"}`}>
          <div>security</div>
          <div><RightOutlined /></div>
        </div>
        <div onClick={() => setTabs("privacy")} className={`flex min-h-[72px] w-[280px] cursor-pointer items-center justify-between px-[16px] py-[9px] text-[0.875rem] font-normal uppercase hover:bg-[#00000033] ${tabs === "privacy" ? " text-[#f5831f]" : " text-[#ffffffb3]"}`}>
          <div>privacy</div>
          <div><RightOutlined /></div>
        </div>
        <div onClick={() => setTabs("account")} className={`flex min-h-[72px] w-[280px] cursor-pointer items-center justify-between px-[16px] py-[9px] text-[0.875rem] font-normal uppercase hover:bg-[#00000033] ${tabs === "account" ? " text-[#f5831f]" : " text-[#ffffffb3]"}`}>
          <div>account settings</div>
          <div><RightOutlined /></div>
        </div>
      </div>
      <div className="w-full">
        {tabs === "featured" && <div className='h-full bg-[#180e05] text-white'><Featured /></div>}
        {tabs === "security" && <div className='h-full bg-[#180e05] text-white'><Security /></div>}
        {tabs === "privacy" && <div className='h-full bg-[#180e05] text-white'><Privacy /></div>}
        {tabs === "account" && <div className='h-full bg-[#180e05] text-white'><AccountSettings /></div>}
      </div>
    </div>
  );
};

export default Settings;

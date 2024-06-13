import { Button } from '@ui/components/nextui/button';
import React from "react";
import CountrySelect from "./countryselect";
import CustomInput from "./customInput";
import Select from "./select";

interface GameOption {
  value: string;
}

const CreateTeam: React.FC = () => {
  const Game: GameOption[] = [
    { value: "Rainbow Six Siege" }
  ];

  return (
    <div className="p-[24px] text-[#ffffffb3]">
      <div className="grid grid-cols-1 gap-[10px] rounded-[4px] bg-[#180e05] p-[32px]">
        <div className="grid grid-cols-2 gap-[10px]">
          <div>
            <div className="mb-2">Team Name</div>
            <CustomInput className="w-full" />
          </div>
          <div>
            <div className="mb-2">Team Name</div>
            <CustomInput className="w-full" />
          </div>
        </div>
        <div className="grid grid-cols-3 gap-[10px]">
          <div>
            <div className="mb-2">Access Code</div>
            <CustomInput className="w-full" />
          </div>
          <div>
            <div>Residency</div>
            <CountrySelect />
          </div>
          <div>
            <div>Game</div>
            <Select item={Game} className="h-[50px] border border-[#ffffff33] bg-transparent focus:border-[#f5831f]" />
          </div>
        </div>
        <div className="mt-2">
          <Button className="bg-orange-400 uppercase text-black">
            REGISTER
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CreateTeam;

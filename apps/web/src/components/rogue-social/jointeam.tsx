import { Button } from '@ui/components/nextui/button';
import CustomInput from "./customInput";

const JoinTeam: React.FC = () => {
  return (
    <div className="p-[24px]">
      <div className="rounded-[4px] bg-[#180e05] p-[32px]">
        <div className="grid grid-cols-2 gap-[10px]">
          <div>
            <div className="mb-2 text-[#ffffffb3]">Team ID</div>
            <CustomInput className="w-full" />
          </div>
          <div>
            <div className="mb-2 text-[#ffffffb3]">Access Code</div>
            <CustomInput className="w-full" />
          </div>
        </div>
        <div className="mt-5 flex gap-[16px]">
          <Button className="bg-orange-400 uppercase text-black">
            JOIN
          </Button>
          <Button className="bg-orange-400 uppercase text-black">
            RESET
          </Button>
        </div>
      </div>
    </div>
  );
};

export default JoinTeam;

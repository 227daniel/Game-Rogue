import { Button, ConfigProvider } from "antd";
import React from "react";

const ManageTeams: React.FC = () => {
  return (
    <div className="p-[24px]">
      <div className="rounded-[4px] bg-[#180e05] p-[32px]">
        <ConfigProvider
          theme={{
            components: {
              Button: {
                defaultHoverBg: "transparent"
              },
            }
          }}
        >
          <Button
            block
            type="default"
            className="border-[#f5831f] bg-transparent text-[#f5831f] hover:bg-transparent"
          >
            CREATE NEW ACCOUNT
          </Button>
        </ConfigProvider>
      </div>
    </div>
  );
}

export default ManageTeams;

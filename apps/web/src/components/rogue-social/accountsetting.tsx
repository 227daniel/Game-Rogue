import { UserOutlined } from '@ant-design/icons';
import { Button } from '@ui/components/nextui/button';
import { Avatar, Badge, Collapse, ConfigProvider, DatePicker, Switch } from 'antd';
import CountrySelect from './countryselect';
import CustomInput from './customInput';

const AccountInfo: React.FC = () => {

  const onChange = (e: any) => {
    // console.log('radio checked', e.target.value);
    // setValue(e.target.value);
  };

  return (
    <div className='p-[8px] text-white'>
      <div className="grid grid-cols-7">
        <div className="col-span-2">
          <div className='text-center'>
            <ConfigProvider
              theme={{
                components: {
                  Badge: {
                    dotSize: 18
                  },
                }
              }}
            >
              <Badge color='#808080' size='large' dot offset={[-19, "83%"]} >
                <Avatar size={150} icon={<UserOutlined />} />
              </Badge>
            </ConfigProvider>
          </div>
          <div className='text-white '>
            <div className="grid grid-cols-2">
              <div className='text-[1rem] font-black uppercase'>Rogue id</div>
              <div className='text-[1rem] font-normal'>@undefined</div>
            </div>
            <div className="grid grid-cols-2">
              <div className='text-[1rem] font-black uppercase'>NAME</div>
              <div className='text-[1rem] font-normal'>@undefined</div>
            </div>
            <div className="grid grid-cols-2">
              <div className='text-[1rem] font-black uppercase'>USER NAME</div>
              <div className='text-[1rem] font-normal'>@undefined</div>
            </div>
            <div className="grid grid-cols-2">
              <div className='text-[1rem] font-black uppercase'>RESIDENCY</div>
              <div className='text-[1rem] font-normal'>@undefined</div>
            </div>
          </div>
        </div>
        <div className="col-span-5">
          <div className="grid grid-cols-2 gap-[10px]">
            <div className='mt-2'>
              <div>User Name</div>
              <CustomInput />
            </div>
            <div className='mt-2'>
              <div>Birthday</div>
              <ConfigProvider
                theme={{
                  components: {
                    DatePicker: {
                      colorBorder: '#ffffff33',
                      activeBorderColor: '#f5831f',
                      hoverBorderColor: '#ffffff33',
                      colorBgContainer: "transparent",
                      controlHeight: 50,
                      colorBgElevated: "#342b23",
                      colorText: "white",
                      colorTextHeading: "white",
                      cellHoverBg: "#f5831f14",
                      controlItemBgActive: "#f5831f",
                      cellActiveWithRangeBg: "#f5831f",
                      borderRadiusSM: "100%",
                      colorIcon: "white",
                      addonBg: "white",
                    },
                  }
                }}
              >
                <DatePicker styles={{ height: "50px" }} onChange={onChange} className='w-full' />
              </ConfigProvider>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-[10px]">
            <div className='mt-2'>
              <div>Residency</div>
              <CountrySelect />
            </div>
            <div className='mt-2'>
              <div className='mb-4'>Age</div>
              <ConfigProvider
                theme={{
                  components: {
                    Switch: {
                      // handleSizeSM: 20,
                    },
                  }
                }}
              >
                <Switch defaultChecked className='w-[50px]' size='default' onChange={onChange} />
              </ConfigProvider>
            </div>
          </div>
          <div className='mt-2'>
            <Button className="bg-orange-400 uppercase text-black">
              SAVE
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

const ChangePassword: React.FC = () => {
  // const [value, setValue] = useState<number>(1);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log('radio checked', e.target.value);
    // setValue(e.target.value);
  };

  return (
    <div className='grid grid-cols-1 gap-[10px] p-[8px] text-[#342b23]'>
      <CustomInput />
      <CustomInput />
      <CustomInput />
    </div>
  );
};

const DeleteAccount: React.FC = () => {
  return (
    <div className={`p-[8px] text-white`}>
      <Button className="bg-orange-400  text-black">
        Delete Account
      </Button>
    </div>
  );
};

const AccountSettings: React.FC = () => {
  const onChange = (key: string | string[]) => {
    console.log(key);
  };

  const items = [
    {
      key: '1',
      label: <div className='text-[1.25rem] font-medium'>Account Information</div>,
      children: <div><AccountInfo /></div>,
    },
    {
      key: '2',
      label: <div className='text-[1.25rem] font-medium'>Change Password</div>,
      children: <div><ChangePassword /></div>,
    },
    {
      key: '3',
      label: <div className='text-[1.25rem] font-medium'>Delete Account</div>,
      children: <div><DeleteAccount /></div>,
    },
  ];

  return (
    <ConfigProvider
      theme={{
        components: {
          Collapse: {
            borderRadiusLG: 0,
            colorBorder: "#342b23",
            contentBg: '#180e05',
            headerBg: "#180e05",
            colorText: "#ffff",
            colorTextHeading: "#ffff",
          },
        }
      }}
    >
      <Collapse
        defaultActiveKey={['1']}
        onChange={onChange}
        expandIconPosition={"end"}
        items={items}
      />
    </ConfigProvider>
  );
};

export default AccountSettings;

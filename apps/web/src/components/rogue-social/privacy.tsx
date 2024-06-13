import { LoadingOutlined } from '@ant-design/icons';
import { Collapse, ConfigProvider, Radio, Spin } from 'antd';
import { Button } from '@ui/components/nextui/button';
import React, { useState } from 'react';

const ChangeAccount: React.FC = () => {
  const [value, setValue] = useState<number>(1);

  const onhandleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log('radio checked', e.target.value);
    setValue(Number(e.target.value));
  };

  return (
    <div className='p-[8px] text-[#342b23]'>
      <p className='text-[1rem]'>Set your account as Private/Public</p>
      <div className='flex gap-[32px]'>
        <div>
          <Radio.Group onChange={() => onhandleChange} value={value}>
            <Radio className='my-[8px] text-[#342b23]' value={1}>Private</Radio>
            <br />
            <Radio className='my-[8px] text-[#342b23]' value={2}>Public</Radio>
          </Radio.Group>
        </div>
        <div>
          <Button className="bg-orange-400 text-black">
            Save
          </Button>
        </div>
      </div>
    </div>
  );
};

const ChangeOnline: React.FC = () => {
  const [value, setValue] = useState<number>(1);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log('radio checked', e.target.value);
    setValue(Number(e.target.value));
  };

  return (
    <div className='p-[8px] text-[#342b23]'>
      <p className='text-[1rem]'>Set online status</p>
      <div className='flex gap-[32px]'>
        <div>
          <Radio.Group onChange={() => onChange} value={value}>
            <Radio className='my-[8px] text-[#342b23]' value={1}>Online</Radio>
            <br />
            <Radio className='my-[8px] text-[#342b23]' value={2}>Idle</Radio>
            <br />
            <Radio className='my-[8px] text-[#342b23]' value={3}>Offline</Radio>
            <br />
            <Radio className='my-[8px] text-[#342b23]' value={4}>Idle</Radio>
          </Radio.Group>
        </div>
        <div>
          <Button className="bg-orange-400  text-black">
            Do Not Disturb
          </Button>
        </div>
      </div>
    </div>
  );
};

interface ContentItem {
  title: string;
}

interface ManageContentProps {
  data: ContentItem[];
}

const ManageContent: React.FC<ManageContentProps> = ({ data }) => {
  return (
    <div className={`p-[8px] text-white`}>
      {data.map((item, index) =>
        <div className={`rounded-[4px] border-DEFAULT border-[#ffffff33] ${index !== 0 ? " mt-[20px]" : ""}`} key={index}>
          <div className='p-[16px]'>
            {item.title}
          </div>
          <hr className='w- full border-[#ffffff33]'></hr>
          <div className='grid grid-cols-2 py-[16px] text-[20px] font-medium'>
            <div className='pl-[16px] text-center'>Interested</div>
            <div className='pr-[16px] text-center'>Not Interested</div>
            <div className='pl-[16px] text-center'>NO GAMES.</div>
            <div className='pr-[16px] text-center'>NO GAMES.</div>
          </div>
        </div>
      )}
    </div>
  );
};

const Privacy: React.FC = () => {
  const onChange = (key: string | string[]) => {
    console.log(key);
  };

  const items = [
    {
      key: '1',
      label: <div className='text-[1.25rem] font-medium'>My Posts</div>,
      children: <div className='flex justify-center'><Spin
        indicator={
          <LoadingOutlined
            style={{
              fontSize: 42,
            }}
            spin
          />
        }
      /></div>,
    },
    {
      key: '2',
      label: <div className='text-[1.25rem] font-medium'>Change Account Status</div>,
      children: <div><ChangeAccount /></div>,
    },
    {
      key: '3',
      label: <div className='text-[1.25rem] font-medium'>Change Online Status</div>,
      children: <div><ChangeOnline /></div>,
    },
    {
      key: '4',
      label: <div className='text-[1.25rem] font-medium'>Manage the Content You See</div>,
      children: <div><ManageContent data={[{ title: "Games" }, { title: "Platforms" }, { title: "Regions" }]} /></div>,
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

export default Privacy;

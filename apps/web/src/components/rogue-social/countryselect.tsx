import React from 'react';
import Flag from 'react-world-flags';
import Select from './select';

interface Country {
  code: string;
  name: string;
}

const CountrySelect: React.FC = () => {
  const countries: Country[] = [
    { code: 'cn', name: '繁體中文' },
    { code: 'us', name: 'English' },
  ];

  const countryItem: any = countries.map((item) => {
    return {
      name: item.code,
      value: (
        <div className="flex" key={item.code}>
          <Flag
            code={item.code}
            style={{ width: '23px', marginRight: '20px' }}
          />
          {item.name}
        </div>
      ),
    };
  });

  const handleChange: any = (value: string) => {
    console.log(`selected ${value}`);
  };

  return (
    <Select
      item={countryItem}
      className="h-[50px] border border-[#ffffff33] bg-transparent focus:border-[#f5831f]"
      onChange={handleChange}
    />
  );
};

export default CountrySelect;

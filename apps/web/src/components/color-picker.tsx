import { useState } from 'react';
import { HexColorPicker } from 'react-colorful';

type ColorPickerProps = {
  defaultColor: string;
};

export function ColorPicker({ defaultColor }: ColorPickerProps): JSX.Element {
  const [displayColorPicker, setDisplayColorPicker] = useState(false);
  const [color, setColor] = useState(defaultColor);

  const handleClick = () => {
    setDisplayColorPicker(!displayColorPicker);
  };

  const handleClose = () => {
    setDisplayColorPicker(false);
  };

  const handleChange = (color: string) => {
    setColor(color);
  };

  const colorStyle = {
    background: color,
  };

  return (
    <div className="w-full">
      <div
        className="inline-block w-full cursor-pointer rounded border-2 border-[#ffffff33] bg-[#000000de] p-[2px] shadow"
        onClick={handleClick}
      >
        <div className="h-8 w-full rounded" style={colorStyle} />
      </div>
      {displayColorPicker ? (
        <div className="absolute z-10">
          <div className="fixed inset-0" onClick={handleClose} />
          <HexColorPicker color={color} onChange={handleChange} />
        </div>
      ) : null}
    </div>
  );
}

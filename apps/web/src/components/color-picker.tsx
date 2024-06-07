import { useEffect, useState } from 'react';
import { HexColorPicker } from 'react-colorful';

type ColorPickerProps = {
  defaultColor: string;
  onSelect?: (value: string) => void;
};

export function ColorPicker({ defaultColor, onSelect }: ColorPickerProps): JSX.Element {
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

  useEffect(() => {
    if (onSelect) {
      onSelect(color);
    }
  }, [color, onSelect]);

  return (
    <div className="relative w-full">
      <div
        className="inline-block w-full cursor-pointer rounded border-2 border-[#ffffff33] bg-[#000000de] p-[2px] shadow"
        onClick={handleClick}
      >
        <div className="h-8 w-full rounded" style={colorStyle} />
      </div>
      {displayColorPicker ? (
        <div className="absolute bottom-full z-10" onBlur={handleClose}>
          <div className="inset-0" onClick={handleClose} />
          <HexColorPicker color={color} onChange={handleChange} />
        </div>
      ) : null}
    </div>
  );
}

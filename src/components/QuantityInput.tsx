import { IconMinus, IconPlus } from "@tabler/icons-react";
import React, { useEffect, useState } from "react";

interface QuantityInputProps {
  min?: number;
  max?: number;
  initial?: number;
  onChange: (value: number) => void;
}

const QuantityInput: React.FC<QuantityInputProps> = ({
  min = 1,
  max = 99,
  initial = 1,
  onChange,
}) => {
  const [value, setValue] = useState<number>(initial);

  const handleIncrement = () => {
    if (value < max) {
      const newValue = value + 1;
      setValue(newValue);
      onChange(newValue);
    }
  };

  const handleDecrement = () => {
    if (value > min) {
      const newValue = value - 1;
      setValue(newValue);
      onChange(newValue);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let newValue = parseInt(e.target.value);
    if (isNaN(newValue) || newValue < min) {
      newValue = min;
    } else if (newValue > max) {
      newValue = max;
    }
    setValue(newValue);
    onChange(newValue);
  };

  useEffect(() => {
    setValue(initial);
  }, [initial]);

  return (
    <div className="flex items-center space-x-2">
      <button
        onClick={handleDecrement}
        className="flex items-center justify-center p-2 text-gray-600 transition-all duration-200 bg-gray-200 rounded-md cursor-pointer hover:bg-gray-200/75 size-8"
        disabled={value <= min}
      >
        <IconMinus className="size-5" />
      </button>
      <input
        type="number"
        value={value}
        onChange={handleChange}
        className="w-16 h-8 pl-2 transition-all duration-200 border border-gray-300 rounded-md outline-none focus:ring focus:ring-blue-500"
        min={min}
        max={max}
      />
      <button
        onClick={handleIncrement}
        className="flex items-center justify-center p-2 text-gray-600 transition-all duration-200 bg-gray-200 rounded-md cursor-pointer hover:bg-gray-200/75 size-8"
        disabled={value >= max}
      >
        <IconPlus className="size-5" />
      </button>
    </div>
  );
};

export default QuantityInput;

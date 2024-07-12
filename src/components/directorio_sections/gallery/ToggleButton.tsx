import React, { useState } from 'react';

interface ToggleButtonProps {
  labelOn: string;
  labelOff: string;
  propOn: string;
  propOff: string;
  class?: string;
  onToggleOn?: () => void;
  onToggleOff?: () => void;
}

const ToggleButton: React.FC<ToggleButtonProps> = ({
  labelOn,
  labelOff,
  propOn,
  propOff,
  class: className = '',
  onToggleOn,
  onToggleOff,
}) => {
  const [isToggled, setIsToggled] = useState(true);

  const handleToggle = () => {
    setIsToggled((prevState) => !prevState);
    if (!isToggled && onToggleOn) {
      onToggleOn();
    }
    if (isToggled && onToggleOff) {
      onToggleOff();
    }
  };

  const currentLabel = isToggled ? labelOn : labelOff;
  const currentProp = isToggled ? propOn : propOff;

  return (
    <button
      onClick={handleToggle}
      className={`w-full cursor-pointer uppercase transition-colors border-2 py-2 px-8 text-white font-semibold no-underline focus:outline-none inline-block sm:w-auto ${className} ${
        isToggled
          ? 'bg-primary border-primary hover:bg-transparent hover:text-primary'
          : 'bg-secondary border-secondary hover:bg-transparent hover:text-secondary'
      }`}
    >
      {currentLabel}
    </button>
  );
};

export default ToggleButton;

import React from 'react';
interface CustomButtonProps {
  text: string;
}

const CustomButton: React.FC<CustomButtonProps> = ({ text }) => {
  return (
    <div>
      <div className="flex flex-row">{text}</div>
    </div>
  );
}

export default CustomButton;

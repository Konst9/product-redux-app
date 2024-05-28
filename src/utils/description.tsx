import React, { useState } from 'react';
import Button from '@mui/material/Button';

const MAXLENGTH: number = 150;

interface DescriptionProps {
  text: string;
  maxLength?: number;
}

const Description: React.FC<DescriptionProps> = ({text, maxLength = MAXLENGTH}) => {
  const [isTextSliced, setIsTextSliced] = useState<boolean>(true);

  const handleToggle = () => {
    setIsTextSliced(!isTextSliced);
  };

  const displayText = isTextSliced && text.length > maxLength
    ? text.slice(0, maxLength) + '...'
    : text;

  return (
    <div>
      <span>{displayText}</span>
      {text.length > maxLength && (
        <button onClick={handleToggle}>
          {isTextSliced ? 'Show details' : 'Hide details'}
        </button>
      )}
    </div>
  );
}

export default Description;
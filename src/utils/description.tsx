import React, { useState } from 'react';
import { CardDescription, CardDescriptionBtn } from './description.styles';

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
      <CardDescription>{displayText}</CardDescription>
      {text.length > maxLength && (
        <CardDescriptionBtn onClick={handleToggle}>
          {isTextSliced ? 'Show details...' : 'Hide details...'}
        </CardDescriptionBtn>
      )}
    </div>
  );
}

export default Description;
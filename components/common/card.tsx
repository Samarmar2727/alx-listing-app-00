// components/common/Card.tsx

import React from 'react';
import { CardProps } from '../../interfaces';

const Card: React.FC<CardProps> = ({ title, imageUrl }) => {
  return (
    <div className="border rounded-lg p-4 shadow-md">
      <img src={imageUrl} alt={title} className="w-full h-40 object-cover rounded-md" />
      <h3 className="mt-2 text-lg font-semibold">{title}</h3>
    </div>
  );
};

export default Card;


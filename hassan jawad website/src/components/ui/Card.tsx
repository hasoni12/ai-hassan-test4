'use client';

import { useState } from 'react';
import { cn } from '@/utils/cn';

interface CardProps {
  className?: string;
  title: string;
  description?: string;
  image?: string;
  imageAlt?: string;
  children?: React.ReactNode;
  footer?: React.ReactNode;
  hoverEffect?: boolean;
}

const Card = ({
  className,
  title,
  description,
  image,
  imageAlt,
  children,
  footer,
  hoverEffect = true,
}: CardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={cn(
        'bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md transition-all duration-300',
        hoverEffect && 'hover:shadow-xl transform hover:-translate-y-1',
        className
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {image && (
        <div className="relative overflow-hidden h-48">
          <img
            src={image}
            alt={imageAlt || title}
            className={cn(
              'w-full h-full object-cover transition-transform duration-500',
              isHovered && 'transform scale-105'
            )}
          />
        </div>
      )}
      <div className="p-5">
        <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-gray-100">{title}</h3>
        {description && <p className="text-gray-600 dark:text-gray-400 mb-4">{description}</p>}
        {children}
      </div>
      {footer && <div className="px-5 py-4 bg-gray-50 dark:bg-gray-700 border-t border-gray-100 dark:border-gray-600">{footer}</div>}
    </div>
  );
};

export default Card;

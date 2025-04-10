'use client';

import { useState } from 'react';
import { cn } from '@/utils/cn';

interface AccordionItemProps {
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
}

const AccordionItem = ({ title, children, defaultOpen = false }: AccordionItemProps) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="border-b border-gray-200 dark:border-gray-700">
      <button
        className="flex justify-between items-center w-full py-4 px-5 text-right"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-lg font-medium text-gray-900 dark:text-gray-100">{title}</span>
        <svg
          className={cn(
            "w-5 h-5 text-gray-500 dark:text-gray-400 transition-transform duration-300",
            isOpen && "transform rotate-180"
          )}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      <div
        className={cn(
          "overflow-hidden transition-all duration-300 max-h-0",
          isOpen && "max-h-96"
        )}
      >
        <div className="p-5 bg-gray-50 dark:bg-gray-800">{children}</div>
      </div>
    </div>
  );
};

interface AccordionProps {
  className?: string;
  children: React.ReactNode;
}

const Accordion = ({ className, children }: AccordionProps) => {
  return (
    <div className={cn("border border-gray-200 dark:border-gray-700 rounded-lg", className)}>
      {children}
    </div>
  );
};

export { Accordion, AccordionItem };

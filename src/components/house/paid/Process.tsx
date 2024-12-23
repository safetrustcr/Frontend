import React from 'react';
import { FaHome, FaMoneyBill, FaFileAlt, FaUsers } from 'react-icons/fa';

const Process: React.FC = () => {
  return (
    <div className="relative mt-4 ml-4">
      <div className="absolute w-0.5 bg-gray-300 h-full left-4"></div>
      {[
        { icon: FaHome, color: 'bg-green-500', text: 'Step 1 description' },
        {
          icon: FaMoneyBill,
          color: 'bg-green-500',
          text: 'Step 2 description',
        },
        { icon: FaFileAlt, color: 'bg-gray-400', text: 'Step 3 description' },
        { icon: FaUsers, color: 'bg-gray-400', text: 'Step 4 description' },
      ].map((step, index) => (
        <div key={index} className="flex items-center mb-6 gap-4 relative">
          <div
             className={`relative z-10 w-8 h-8 ${step.color} text-white flex items-center justify-center rounded-full`}
          >
            <step.icon className="w-4 h-4" />
          </div>
          <span className="text-light-primary dark:text-dark-primary text-sm">{step.text}</span>
        </div>
      ))}
    </div>
  );
};

export default Process;

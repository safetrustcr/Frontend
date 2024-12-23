import React from 'react';
import { FaHome, FaMoneyBill, FaBell } from 'react-icons/fa';
import { GiReceiveMoney } from 'react-icons/gi';
import { GrDocumentLocked } from 'react-icons/gr';

const Process: React.FC = () => {
  return (
    <div className="relative mt-4 ml-4">
      {/* Vertical line */}
      <div className="absolute w-0.5 bg-gray-300 h-full left-4"></div>
      {[
        { icon: FaHome, color: 'bg-green-500', text: 'Step 1 description' },
        {
          icon: FaMoneyBill,
          color: 'bg-green-500',
          text: 'Step 2 description',
        },
        {
          icon: GrDocumentLocked,
          color: 'bg-gray-400',
          text: 'Step 3 description',
        },
        {
          icon: GiReceiveMoney,
          color: 'bg-gray-400',
          text: 'Step 4 description',
        },
        { icon: FaBell, color: 'bg-gray-400', text: 'Step 5 description' },
      ].map((step, index) => (
        <div key={index} className="flex items-center mb-6 gap-4 relative">
          {/* Icon container */}
          <div
            className={`relative z-10 w-10 h-10 ${step.color} text-white flex items-center justify-center rounded-full`}
          >
            {step.icon ? (
              // Render icon if it exists
              <step.icon className="w-5 h-5" />
            ) : (
              // Render image if `image` exists
              <img
                src={step.image}
                alt={`Step ${index + 1} icon`}
                className="w-6 h-6 rounded-full border-2 border-white shadow"
              />
            )}
          </div>
          {/* Step description */}
          <span className="text-gray-700 text-sm">{step.text}</span>
        </div>
      ))}
    </div>
  );
};

export default Process;

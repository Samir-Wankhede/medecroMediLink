"use client";
import { useState } from 'react';

export default function Toggle({ onToggleChange }) {
  const [selectedToggle, setSelectedToggle] = useState('waiting');

  const handleToggleChange = (type) => {
    setSelectedToggle(type);
    onToggleChange(type); // Notify parent of the selected toggle
  };

  return (
    <div className="p-6 md:p-12 lg:p-24 flex items-center justify-center">
      <div className="inline-flex flex-col md:flex-row overflow-hidden border border-gray-200 rounded-lg">
        <label htmlFor="waiting" className="cursor-pointer">
          <input
            type="radio"
            name="appointmentStatus"
            id="waiting"
            className="sr-only peer"
            checked={selectedToggle === 'waiting'}
            onChange={() => handleToggleChange('waiting')}
          />
          <span className="relative inline-flex items-center h-full py-2 pr-3 space-x-2 text-sm pl-7 peer-checked:bg-blue-200">
            <span className="before:w-2 before:h-2 before:bg-blue-500 before:rounded-full before:absolute before:top-[14px] before:left-3">
              Waiting List
            </span>
          </span>
        </label>
        <label htmlFor="scheduled" className="cursor-pointer">
          <input
            type="radio"
            name="appointmentStatus"
            id="scheduled"
            className="sr-only peer"
            checked={selectedToggle === 'scheduled'}
            onChange={() => handleToggleChange('scheduled')}
          />
          <span className="relative inline-flex items-center h-full py-2 pr-3 space-x-2 text-sm pl-7 peer-checked:bg-red-200">
            <span className="before:w-2 before:h-2 before:bg-red-500 before:rounded-full before:absolute before:top-[14px] before:left-3">
              Scheduled
            </span>
          </span>
        </label>
        <label htmlFor="completed" className="cursor-pointer">
          <input
            type="radio"
            name="appointmentStatus"
            id="completed"
            className="sr-only peer"
            checked={selectedToggle === 'completed'}
            onChange={() => handleToggleChange('completed')}
          />
          <span className="relative inline-flex items-center h-full py-2 pr-3 space-x-2 text-sm pl-7 peer-checked:bg-green-200">
            <span className="before:w-2 before:h-2 before:bg-green-500 before:rounded-full before:absolute before:top-[14px] before:left-3">
              Completed
            </span>
          </span>
        </label>
      </div>
    </div>
  );
}

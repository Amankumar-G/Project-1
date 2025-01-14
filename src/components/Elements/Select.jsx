import React from 'react';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';

const Select = ({ label, id, name, options = [] }) => {
  const { attributes, listeners, setNodeRef, transform, transition,isDragging } = useSortable({ id });

  const style = {
    opacity: isDragging ? 0.5 : undefined,
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <div ref={setNodeRef} style={style} {...attributes} {...listeners} className="sortable-item">
  <label htmlFor={id} className="block text-base font-bold text-gray-700 mb-2">
    {label}
  </label>
  <select
    id={id}
    name={name}
    size={options.length} // Show all options in expanded view
    disabled
    className="pointer-events-none block w-full px-3 py-2 border border-gray-300 bg-white rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm disabled:bg-white disabled:text-black disabled:cursor-default"
  >
    {options.map((option, index) => (
      <option key={index} value={option.value}>
        {option.text}
      </option>
    ))}
  </select>
</div>
  );
};

export default Select;

import React from 'react';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';

const Radio = ({ id, label, options, defaultSelected, required }) => {
  return (
    <div className="radio-group">
      {/* Render group label */}
      {label && <h3 className="text-lg font-bold mb-4 text-gray-700">{label}</h3>}

      {/* Render radio buttons */}
      {options.map(({ value, text }) => (
        <SortableRadioItem
          key={value}
          id={`${id}-${value}`}
          name={id}
          value={value}
          label={text}
          required={required}
        />
      ))}
    </div>
  );
};

const SortableRadioItem = ({ id, name, value, label, defaultChecked, required }) => {
  const { attributes, listeners, setNodeRef, transform, transition, isDragging } =
    useSortable({ id });

  const style = {
    opacity: isDragging ? 0.5 : undefined,
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      className="sortable-item mb-3"
    >
      <div className="flex items-center mx-auto">
        <input
          type="radio"
          id={id}
          name={name}
          value={value}
          defaultChecked={defaultChecked}
          required={required}
          disabled
          className="pointer-events-none h-4 w-4 text-indigo-600 border-gray-300 focus:ring-indigo-500 disabled:bg-white disabled:text-black disabled:cursor-default"
        />
        <label htmlFor={id} className="ml-2 block text-sm text-gray-700">
          {label}
        </label>
      </div>
    </div>
  );
};

export default Radio;

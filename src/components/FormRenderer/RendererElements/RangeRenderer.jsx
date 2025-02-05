import React from "react";

const RangeRenderer = ({ field, value, handleChange ,error}) => {
  return (
    <div key={field.id}  className={`mb-6 DragFormX-Range-Container ${field.className}`}>
      {field.label && (
        <label
          htmlFor={field.id}
          className="block text-sm font-medium text-gray-700 mb-2 DragFormX-Label"
        >
          {field.label}
        </label>
      )}

      <input
        {...field}
        type="range"
        value={value || field.min || 0}
        onChange={handleChange}
        className={`w-full mt-2 cursor-pointer bg-indigo-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 DragFormX-Range-Input
         ${error ? "border-red-500" : ""
         }`}
      />

      <div className="text-sm text-gray-700 mt-2 flex justify-between DragFormX-Range-Value">
        <span className="DragFormX-Range-Text">Min: {field.min || 0}</span>
        <span className="DragFormX-Range-Text">Value: {value}</span>
        <span className="DragFormX-Range-Text">Max: {field.max || 100}</span>
      </div>

      {error && <div className="text-red-500 text-sm mt-1 DragFormX-Error">{error}</div>}
    </div>
  );
};

export default RangeRenderer;

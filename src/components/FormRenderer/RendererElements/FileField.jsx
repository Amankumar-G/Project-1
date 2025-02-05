import React from "react";

const FileField = ({ field, value, handleChange,error }) => {
  // Ensure multiple is a boolean
  const isMultiple = field.multiple === true;
  console.log(field)
  return (
    <div key={field.id} className={`mb-6 ${field.className}`}> {/* Updated margin for spacing */}
    {field.label && (
      <label
        htmlFor={field.id}
        className="block text-sm font-medium text-gray-700 mb-2" // Improved label styling with margin bottom
      >
        {field.label}
      </label>
    )}
    
    <input
      {...field}
      multiple={isMultiple}
      onChange={handleChange}
      type="file"
      className={`w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all duration-300 DragFormX-input ${
        error ? "border-red-500" : ""
      }`}
    />
    
    {value && value.length > 0 && (
      <div className="mt-3 text-sm text-gray-700"> {/* Improved spacing and text styling */}
        <strong>Selected File{isMultiple ? "s" : ""}:</strong>
        <ul className="list-disc pl-5">
          {value.map((file, index) => (
            <li key={index} className="text-gray-600">{file.name}</li>
          ))}
        </ul>
      </div>
    )}

    {error && <div className="text-red-500 text-sm mt-1 DragFormX-Error">{error}</div>}
  
  </div>
  
  );
};


export default FileField;

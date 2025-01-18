import React, { useState, useEffect } from "react";
import InputField from "./InputField";
import Toggle from "./Toggle";
import Header from "./Header";

const HiddenProperties = ({ activeElement, capitalize, handleDone }) => {
  const [formDetails, setFormDetails] = useState({
    name: activeElement.name || "",
    value: activeElement.value || "",
    required: activeElement.required || false,
  });

  useEffect(() => {
    setFormDetails({
      name: activeElement.name || "",
      value: activeElement.value || "",
      required: activeElement.required || false,
    });
  }, [activeElement]);

  const handleFieldChange = (field, value) => {
    setFormDetails((prevDetails) => ({
      ...prevDetails,
      [field]: value,
    }));
  };

  return (
    <div className="min-h-screen bg-gray-200 flex flex-col px-6 py-4 space-y-8">
      {/* Header with Done Button */}
      <Header
        title={`Type : ${capitalize(activeElement.type)}`}
        buttonText="DONE"
        onClick={() => handleDone(formDetails)}
      />

      {/* Editable Properties for Hidden Field */}
      <div className="space-y-6">
        {/* Name Property */}
        <InputField
          id="name"
          label="NAME"
          placeholder="Enter name"
          value={formDetails.name}
          onChange={handleFieldChange}
        />

        {/* Value Property */}
        <InputField
          id="value"
          label="VALUE"
          placeholder="Enter value"
          value={formDetails.value}
          onChange={handleFieldChange}
        />

        {/* Required Toggle */}
        <Toggle
          id="required"
          label="REQUIRED FIELD"
          checked={formDetails.required}
          onChange={handleFieldChange}
        />
      </div>
    </div>
  );
};

export default HiddenProperties;
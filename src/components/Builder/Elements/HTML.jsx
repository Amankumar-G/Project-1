import React from "react";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

const HTML = ({
  label,
  id,
  value,
  color = "black", // Default color
  italic = false, // Default not italic
  bold = false, // Default not bold
}) => {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id });

  const baseStyle = {
    transform: CSS.Transform.toString(transform),
    transition,
    cursor: "grab",
    color, // Dynamic color
    fontStyle: italic ? "italic" : "normal", // Dynamic italic
    fontWeight: bold ? "bold" : "normal", // Dynamic bold
    opacity: isDragging ? 0.5 : 1, // Reduce opacity while dragging
  };

  const textClass =
    value === "h1"
      ? "text-2xl font-bold"
      : value === "h2"
      ? "text-xl font-semibold"
      : value === "h3"
      ? "text-lg font-medium"
      : "text-base"; // Default for 'p' or other tags

  return (
    <div
      ref={setNodeRef}
      style={baseStyle}
      {...attributes}
      {...listeners}
      className="sortable-item mb-2"
    >
      {value === "h1" && <h1 style={baseStyle} className={textClass}>{label}</h1>}
      {value === "h2" && <h2 style={baseStyle} className={textClass}>{label}</h2>}
      {value === "h3" && <h3 style={baseStyle} className={textClass}>{label}</h3>}
      {value === "p" && <p style={baseStyle} className={textClass}>{label}</p>}
    </div>
  );
};

export default HTML;
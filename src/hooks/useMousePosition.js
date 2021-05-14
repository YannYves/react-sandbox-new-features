import { useState, useEffect } from "react";

const useMousePosition = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  // Setup state to track x and y position (useState)
  // Setup event to listen fro mousse event
  // Remove event listener if unmounted (useEffect)

  useEffect(() => {
    console.log("setting up event");
    const handleMouseMove = (e) => {
      setPosition({ x: e.pageX, y: e.pageY });
    };
    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return position;
};

export { useMousePosition as default };

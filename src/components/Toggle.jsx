import React, { useState, useEffect } from "react";

const Toggle = () => {
  const [toggleSwitch, setToggleSwitch] = useState(true);

  useEffect(() => {
    document.body.className = toggleSwitch ? "light-mode" : "dark-mode";
  }, [toggleSwitch]);

  function handleToggle() {
    setToggleSwitch((prevToggle) => !prevToggle);
  }

  return (
    <>
      <div className="toggle-container">
        <div className="toggle-element" onClick={handleToggle}>
          {toggleSwitch ? "🌙" : "☀️"}
        </div>
      </div>
    </>
  );
};

export default Toggle;

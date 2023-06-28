import React, { useState, useEffect } from "react";

import "./index.css";

const Clock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  const formattedTime = time.toLocaleTimeString();

  return <div className="Clock">{formattedTime}</div>;
};

export default Clock;

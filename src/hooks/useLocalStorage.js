import React, { useState, useEffect } from "react";

const useLocalStorage = (key, defaultValue) => {
  const [value, setValue] = useState(defaultValue);

  useEffect(() => {
    const current = window.localStorage.getItem(key);
    if (current) {
      setValue(JSON.parse(current));
    } else {
      window.localStorage.setItem(key, JSON.stringify(defaultValue));
      setValue(defaultValue);
    }
  }, []);

  const updateValue = (newValue) => {
    setValue(newValue);
    window.localStorage.setItem(key, JSON.stringify(newValue));
  };

  return [value, updateValue];
};

export default useLocalStorage;

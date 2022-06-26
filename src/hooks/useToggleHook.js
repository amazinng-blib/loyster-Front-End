import React, { useState } from "react";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
const useToggleHook = () => {
  const [visible, setVisible] = useState(false);

  let iconToggle = visible ? (
    <AiFillEye
      onClick={() => setVisible(!visible)}
      style={{ fontSize: "1em" }}
    />
  ) : (
    <AiFillEyeInvisible
      onClick={() => setVisible(!visible)}
      style={{ fontSize: "1.1em" }}
    />
  );

  let passwordToggle = visible ? "text" : "password";

  return { iconToggle, passwordToggle };
};

export default useToggleHook;

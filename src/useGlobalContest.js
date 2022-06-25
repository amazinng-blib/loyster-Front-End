import React, { useState, useEffect } from "react";
import Page1 from "./components/Onboard_1";
import Page_2 from "./components/Onboard_2";
import Page_3 from "./components/Onboard_3";
const useGlobalContest = () => {
  const [index, setIndex] = useState(0);

  const array = [<Page1 />, <Page_2 />, <Page_3 />];

  let currpage = array[index];

  const nextBtn = () => {
    setIndex((e) => e + 1);
  };
  const prevBtn = () => {
    setIndex((e) => e - 1);
  };

  useEffect(() => {
    const lastIndex = array.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }
  }, [index]);

  return {
    currpage,
    nextBtn,
    prevBtn,
    index,
    setIndex,
    array,
  };
};

export default useGlobalContest;

import React from "react";
import useLocalStorage from "../hooks/useLocalStorage";
const SavedCard = () => {
  const { value } = useLocalStorage();

  return (
    <form className="saved-card">
      <div className="saved-card-form">
        <input type="text" />
      </div>
    </form>
  );
};

export default SavedCard;

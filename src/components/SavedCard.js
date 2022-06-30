import React from "react";
import { AiOutlineDelete } from "react-icons/ai";
const SavedCard = ({ card, select, removeCard }) => {
  return (
    <div className="saved-card">
      <input type="text" />

      <div className="saved-card-container">
        {card.map((item, index) => {
          return (
            <div key={index}>
              <label>Card No:</label>
              <div className="saved-details">
                <p>
                  &#8863; <span>{item.number}</span>
                </p>
                <AiOutlineDelete />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SavedCard;

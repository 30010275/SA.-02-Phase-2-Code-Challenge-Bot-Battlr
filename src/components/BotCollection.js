import React from "react";
import BotCard from "./BotCard";
import "./BotCollection.css";

const BotCollection = ({ bots, onAddToArmy, onDeleteBot }) => {
  return (
   
   <div className="bot-collection">
     
      <h2>Available Bots</h2>
    
      <div className="bot-list">
        {bots.map((bot) => (
          <BotCard 
            key={bot.id} 
            bot={bot} 
            onAddToArmy={onAddToArmy} 
            onDelete={onDeleteBot} 
          />
        ))}
      </div>
    </div>
  );
};

export default BotCollection;

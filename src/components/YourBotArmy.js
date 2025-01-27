import React from "react";
import BotCard from "./BotCard";
import "./YourBotArmy.css";

const YourBotArmy = ({ botArmy, releaseBotFromArmy }) => {
  return (

    <div className="your-bot-army">
      <h2>Your Bot Army</h2>
      
      <div className="bot-list">
        {botArmy.map((bot) => (
          <BotCard 
            key={bot.id} 
            bot={bot} 
            onAddToArmy={releaseBotFromArmy} 
            onDelete={() => {}} // Discharge doesn't apply here
          />
        ))}
      </div>
    </div>
  );
};

export default YourBotArmy;

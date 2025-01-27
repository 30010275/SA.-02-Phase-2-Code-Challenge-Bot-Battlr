import React from "react";
import "./BotCard.css";

const BotCard = ({ bot, onAddToArmy, onDelete }) => {
  return (
   
   <div className="bot-card">

      <img src={bot.avatar_url} alt={bot.name} className="bot-avatar" />
      <h3>{bot.name}</h3>
      <p>Class: {bot.bot_class}</p>
      <p>Health: {bot.health}</p>
      <p>Damage: {bot.damage}</p>
      <p>Armor: {bot.armor}</p>
      
      <button onClick={() => onAddToArmy(bot)}>Add to Army</button>
      <button onClick={() => onDelete(bot)} className="delete-btn">
        Discharge
      </button>
    </div>
  );
};

export default BotCard;

import React, { useState, useEffect } from "react";  // Importing necessary hooks from React
import BotCollection from "./components/BotCollection";  // Import the BotCollection component
import YourBotArmy from "./components/YourBotArmy";  // Import the YourBotArmy component
import "./App.css";  // Import the styles for the app

const App = () => {
 
  // DeclareRING state variables for holding bots and bot army
 
  const [bots, setBots] = useState([]);  // bots will hold all available bots from the server
  const [botArmy, setBotArmy] = useState([]);  // botArmy will hold the bots the user has selected for their army

  // useEffect hook for fetching data from the backend when the component loads
 
  useEffect(() => {
    // Fetch all available bots from the API
    
    fetch("https://bots-si0g.onrender.com/bots")
      .then((res) => res.json())  // Parse the response as JSON
      .then((data) => setBots(data))  // Update the 'bots' state with the fetched data
      .catch((err) => console.error("Error fetching bots:", err));  // Log an error if the fetch fails
  }, []);  // Empty dependency array means this will only run once when the component mounts

  // Function to add a bot to the bot army
  
  const addBotToArmy = (bot) => {
    // Check if the bot is not already in the army (based on its unique id)
   
   
    if (!botArmy.some((b) => b.id === bot.id)) {
      // If not, add the bot to the botArmy state
      setBotArmy([...botArmy, bot]);
    }
  };

  // Function to remove a bot from the army
  
  const releaseBotFromArmy = (bot) => {
    // Filter out the bot from the botArmy state
    setBotArmy(botArmy.filter((b) => b.id !== bot.id));
  };

  // Function to delete a bot permanently from both the backend and the frontend
  
  const deleteBot = (bot) => {
    // Send a DELETE request to the backend to delete the bot
  
    fetch(`https://bots-si0g.onrender.com/bots/${bot.id}`, {
      method: "DELETE",  // HTTP method for deletion
    })
      .then(() => {
        // If the deletion is successful, update the state to remove the bot from both 'bots' and 'botArmy'
       
        setBots(bots.filter((b) => b.id !== bot.id));  // Remove bot from the bot list
        setBotArmy(botArmy.filter((b) => b.id !== bot.id));  // Remove bot from the bot army
      })
      .catch((err) => console.error("Error deleting bot:", err));  // Log an error if the DELETE request fails
  };

  return (
    <div className="app">
      <h1>BOT BATLLR</h1>  {/* Title of the app */}

      {/* Rendering YourBotArmy component, passing the botArmy state and releaseBotFromArmy function as props */}
      <YourBotArmy 
        botArmy={botArmy} 
        releaseBotFromArmy={releaseBotFromArmy} 
      />

      {/* Render BotCollection component, passing bots, addBotToArmy, and deleteBot as props */}
      <BotCollection 
        bots={bots} 
        onAddToArmy={addBotToArmy}  // Function to add bot to army
        onDeleteBot={deleteBot}     // to delete a bot
      />
    </div>
  );
};

export default App;  // Exporting App component as the default export

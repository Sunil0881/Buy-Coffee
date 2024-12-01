import { useEffect } from 'react';

const telegram = window.Telegram.WebApp;

function TelegramWrapper({ children }) {
  useEffect(() => {
    // Initialize Telegram Mini App
    telegram.ready();
    
    // You can set up some basic parameters
    telegram.expand(); // Expands the Mini App to full height
    
    // Optional: Handle back button
    telegram.BackButton.onClick(() => {
      // Your back navigation logic
    });
  }, []);

  return children;
}

export default TelegramWrapper;
import React, { useState } from 'react';
import '../styles.css';

const LearnColors = () => {
  const [selectedItem, setSelectedItem] = useState(null);

  const items = [
    { name: 'Apple', color: '#E74C3C', emoji: '🍎', colorName: 'Red' },
    { name: 'Banana', color: '#F1C40F', emoji: '🍌', colorName: 'Yellow' },
    { name: 'Grapes', color: '#9B59B6', emoji: '🍇', colorName: 'Purple' },
    { name: 'Carrot', color: '#E67E22', emoji: '🥕', colorName: 'Orange' },
    { name: 'Broccoli', color: '#27AE60', emoji: '🥦', colorName: 'Green' },
    { name: 'Blueberry', color: '#3498DB', emoji: '🫐', colorName: 'Blue' }
  ];

  const handleItemClick = (item) => {
  setSelectedItem(item);

  const text = `${item.name} is ${item.colorName}!`;

  // Cancel any ongoing speech
  window.speechSynthesis.cancel();

  // Create the utterance
  const msg = new SpeechSynthesisUtterance(text);
  msg.lang = 'en-US';
  msg.rate = 0.85;  // slower for clarity
  msg.pitch = 1.1;  // slightly cheerful tone
  msg.volume = 1.0; // full volume

  // 🎤 Choose a clear, natural voice if available
  const setVoice = () => {
    const voices = window.speechSynthesis.getVoices();
    const preferredVoice = voices.find(
      (v) =>
        v.name.includes("Google US English") ||
        v.name.includes("Samantha") ||
        v.name.includes("Microsoft") ||
        v.name.includes("Alex")
    );
    if (preferredVoice) {
      msg.voice = preferredVoice;
    }
    window.speechSynthesis.speak(msg);
  };

  // If voices aren’t loaded yet, wait for them
  if (window.speechSynthesis.getVoices().length === 0) {
    window.speechSynthesis.onvoiceschanged = setVoice;
  } else {
    setVoice();
  }

  // keep highlight visible briefly
  setTimeout(() => setSelectedItem(null), 2000);
};


export default LearnColors;

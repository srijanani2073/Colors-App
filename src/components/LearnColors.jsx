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
    setTimeout(() => setSelectedItem(null), 2000);
  };

  return (
    <div className="learn-colors">
      <h2 className="section-title">Click on the fruits and veggies!</h2>
      <div className="items-grid">
        {items.map((item, idx) => (
          <button
            key={idx}
            className={`color-item ${selectedItem === item ? 'selected' : ''}`}
            onClick={() => handleItemClick(item)}
            style={{ '--item-color': item.color }}
            aria-label={`${item.name} is ${item.colorName}`}
          >
            <span className="item-emoji">{item.emoji}</span>
            <span className="item-name">{item.name}</span>
            <span className="item-color-name">{item.colorName}</span>
          </button>
        ))}
      </div>
      {selectedItem && (
        <div className="color-announcement">
          <p>{selectedItem.name} is <strong>{selectedItem.colorName}</strong>!</p>
        </div>
      )}
    </div>
  );
};

export default LearnColors;

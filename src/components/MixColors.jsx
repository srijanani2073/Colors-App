import React, { useState } from 'react';
import '../styles.css';

const MixColors = () => {
  const [slot1, setSlot1] = useState(null);
  const [slot2, setSlot2] = useState(null);
  const [result, setResult] = useState(null);
  const [isStirring, setIsStirring] = useState(false);

  const primaryColors = [
    { name: 'Red', hex: '#E74C3C' },
    { name: 'Yellow', hex: '#F1C40F' },
    { name: 'Blue', hex: '#3498DB' }
  ];

  const mixingRules = {
    'Red-Yellow': { color: '#E67E22', name: 'Orange' },
    'Yellow-Red': { color: '#E67E22', name: 'Orange' },
    'Red-Blue': { color: '#9B59B6', name: 'Purple' },
    'Blue-Red': { color: '#9B59B6', name: 'Purple' },
    'Blue-Yellow': { color: '#27AE60', name: 'Green' },
    'Yellow-Blue': { color: '#27AE60', name: 'Green' }
  };

  const handleColorSelect = (color) => {
    if (!slot1) setSlot1(color);
    else if (!slot2) setSlot2(color);
  };

  const handleMix = () => {
    if (slot1 && slot2) {
      setIsStirring(true);
      setTimeout(() => {
        const key = `${slot1.name}-${slot2.name}`;
        setResult(mixingRules[key]);
        setIsStirring(false);
      }, 1500);
    }
  };

  const handleReset = () => {
    setSlot1(null);
    setSlot2(null);
    setResult(null);
    setIsStirring(false);
  };

  return (
    <div className="mix-colors">
      <h2 className="section-title">Mix two colors together!</h2>
      
      <div className="mixing-area">
        <div className="primary-colors">
          {primaryColors.map((color, idx) => (
            <button
              key={idx}
              className="primary-color-btn"
              style={{ backgroundColor: color.hex }}
              onClick={() => handleColorSelect(color)}
              disabled={slot1 && slot2}
              aria-label={color.name}
            >
              {color.name}
            </button>
          ))}
        </div>

        <div className="mixing-slots">
          <div className="slot" style={{ backgroundColor: slot1?.hex || '#f0f0f0' }}>
            {slot1 ? slot1.name : 'Pick 1st color'}
          </div>
          <div className="plus">+</div>
          <div className="slot" style={{ backgroundColor: slot2?.hex || '#f0f0f0' }}>
            {slot2 ? slot2.name : 'Pick 2nd color'}
          </div>
        </div>

        {slot1 && slot2 && !result && (
          <button className="mix-btn" onClick={handleMix}>
            Mix Colors! 🎨
          </button>
        )}

        {isStirring && (
          <div className="mixing-well stirring">
            <div className="stirrer"></div>
          </div>
        )}

        {result && (
          <div className="result-container">
            <div className="result-well" style={{ backgroundColor: result.color }}>
              <span className="result-text">{result.name}!</span>
            </div>
            <p className="result-message">
              {slot1.name} + {slot2.name} = <strong>{result.name}</strong>
            </p>
            <button className="reset-btn" onClick={handleReset}>
              Try Again 🔄
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default MixColors;

import React, { useState } from 'react';
import '../styles.css';

const FillColors = () => {
  const [selectedColor, setSelectedColor] = useState('#E74C3C');
  const [filledSections, setFilledSections] = useState({});
  const [showConfetti, setShowConfetti] = useState(false);

  const colors = [
    { name: 'Red', hex: '#E74C3C' },
    { name: 'Yellow', hex: '#F1C40F' },
    { name: 'Blue', hex: '#3498DB' },
    { name: 'Green', hex: '#27AE60' },
    { name: 'Purple', hex: '#9B59B6' },
    { name: 'Orange', hex: '#E67E22' }
  ];

  const sections = [
    { id: 'roof', label: 'Roof' },
    { id: 'wall', label: 'Wall' },
    { id: 'door', label: 'Door' },
    { id: 'tree', label: 'Tree' },
    { id: 'sun', label: 'Sun' },
    { id: 'grass', label: 'Grass' }
  ];

  const handleSectionClick = (sectionId) => {
    const newFilled = { ...filledSections, [sectionId]: selectedColor };
    setFilledSections(newFilled);
    if (Object.keys(newFilled).length === sections.length) {
      setShowConfetti(true);
      setTimeout(() => setShowConfetti(false), 3000);
    }
  };

  return (
    <div className="fill-colors">
      <h2 className="section-title">Color the picture!</h2>
      <div className="coloring-canvas">
        <svg viewBox="0 0 400 300" className="coloring-image">
          <circle cx="350" cy="50" r="30" fill={filledSections.sun || '#fff'} stroke="#333" strokeWidth="3" onClick={() => handleSectionClick('sun')} className="colorable-section" />
          <path d="M 100 150 L 200 80 L 300 150 Z" fill={filledSections.roof || '#fff'} stroke="#333" strokeWidth="3" onClick={() => handleSectionClick('roof')} className="colorable-section" />
          <rect x="120" y="150" width="160" height="100" fill={filledSections.wall || '#fff'} stroke="#333" strokeWidth="3" onClick={() => handleSectionClick('wall')} className="colorable-section" />
          <rect x="170" y="190" width="60" height="60" fill={filledSections.door || '#fff'} stroke="#333" strokeWidth="3" onClick={() => handleSectionClick('door')} className="colorable-section" />
          <circle cx="70" cy="180" r="40" fill={filledSections.tree || '#fff'} stroke="#333" strokeWidth="3" onClick={() => handleSectionClick('tree')} className="colorable-section" />
          <rect x="60" y="210" width="20" height="40" fill="#8B4513" stroke="#333" strokeWidth="2" />
          <rect x="0" y="250" width="400" height="50" fill={filledSections.grass || '#fff'} stroke="#333" strokeWidth="3" onClick={() => handleSectionClick('grass')} className="colorable-section" />
        </svg>

        {showConfetti && (
          <div className="confetti">
            {[...Array(20)].map((_, i) => (
              <div key={i} className="confetti-piece" style={{
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 0.5}s`,
                background: colors[Math.floor(Math.random() * colors.length)].hex
              }} />
            ))}
          </div>
        )}
      </div>

      <div className="color-palette">
        {colors.map((color, idx) => (
          <button
            key={idx}
            className={`color-swatch ${selectedColor === color.hex ? 'selected' : ''}`}
            style={{ backgroundColor: color.hex }}
            onClick={() => setSelectedColor(color.hex)}
            aria-label={color.name}
          >
            {selectedColor === color.hex && <span className="check">✓</span>}
          </button>
        ))}
      </div>
    </div>
  );
};

export default FillColors;

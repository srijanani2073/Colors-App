import React from 'react';
import '../styles.css';

const Menu = ({ onSelectActivity, activeActivity }) => {
  const activities = [
    { id: 'learn', icon: '🎨', label: 'Learn Colors' },
    { id: 'fill', icon: '🖌️', label: 'Fill Colors' },
    { id: 'mix', icon: '🌈', label: 'Mix Colors' }
  ];

  return (
    <nav className="menu">
      {activities.map(activity => (
        <button
          key={activity.id}
          className={`menu-btn ${activeActivity === activity.id ? 'active' : ''}`}
          onClick={() => onSelectActivity(activity.id)}
          aria-label={activity.label}
        >
          <span className="menu-icon">{activity.icon}</span>
          <span className="menu-label">{activity.label}</span>
        </button>
      ))}
    </nav>
  );
};

export default Menu;

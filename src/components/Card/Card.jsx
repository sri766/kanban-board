import React from 'react';
import './style.modules.css';

const Card = ({ticket, getUserById}) => {
  return (
    <div className="card">
      <div className="card-header">
        <span className="card-id">{ticket.id}</span>
        <div className='pic'>
          <img
            className="profile-pic"
            src="https://via.placeholder.com/40"
            alt="Profile"
          />
          <span className="profile-dot"></span>
        </div>
      </div>
      <div class="card-content">
        <div class="card-title">{ticket.title}</div>
      </div>
      <div className="card-footer">
        <div className="icon-badge">
          <div className="icon">
            <span className='tag'>!</span>
          </div>
        </div>
        <span className="status-badge">
          <div className='circle'></div>
          {ticket.tag}
        </span>
      </div>
    </div>
  );
};

export default Card;

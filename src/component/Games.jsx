import React, { useState } from 'react';
import './Games.css';


const Games = () => {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [selectedPlayers, setSelectedPlayers] = useState([]);

  const toggleDropdown = (game) => {
    setOpenDropdown(openDropdown === game ? null : game);
  };

  const addPlayer = (player) => {
    if (!selectedPlayers.includes(player)) {
      setSelectedPlayers([...selectedPlayers, player]);
    }
  };

  const dropPlayer = (player) => {
    setSelectedPlayers(selectedPlayers.filter(p => p !== player));
  };

  const renderPlayer = (player) => (
    <div className="dropdown-item" key={player}>
      {player}
      <button className="action-button" onClick={() => addPlayer(player)}>Add</button>
      <button className="action-button" onClick={() => dropPlayer(player)}>Drop</button>
    </div>
  );

  return (
    <div className='game'>
      <div className="navbar">
        <div className="menu-item" onClick={() => toggleDropdown('cricket')}>
          Cricket
          {openDropdown === 'cricket' && (
            <div className="dropdown-box">
              {['Sachin Tendulkar', 'Virat Kohli', 'MS Dhoni', 'Jasprit Bumrah', 'Ravindra Jadeja', 'Hardik Pandya'].map(renderPlayer)}
            </div>
          )}
        </div>
        <div className="menu-item" onClick={() => toggleDropdown('football')}>
          Football
          {openDropdown === 'football' && (
            <div className="dropdown-box">
              {['Lionel Messi', 'Cristiano Ronaldo', 'Neymar Jr', 'Robert Lewandowski', 'Kylian Mbappé', 'Virgil van Dijk'].map(renderPlayer)}
            </div>
          )}
        </div>
        <div className="menu-item" onClick={() => toggleDropdown('badminton')}>
          Badminton
          {openDropdown === 'badminton' && (
            <div className="dropdown-box">
              {['Lin Dan', 'Lee Chong Wei', 'P. V. Sindhu', 'Taufik Hidayat', 'Han Aiping', 'Rudy Hartono'].map(renderPlayer)}
            </div>
          )}
        </div>
        <div className="menu-item" onClick={() => toggleDropdown('hockey')}>
          Hockey
          {openDropdown === 'hockey' && (
            <div className="dropdown-box">
              {['Dhyan Chand', 'Sardar Singh', 'Jamie Dwyer', 'Harry Lumley', 'Jim Craig', 'Bobby Orr'].map(renderPlayer)}
            </div>
          )}
        </div>
        <div className="navbar-right">
          Olympic Fantasy
        </div>
      </div>
      <div className="selected-players-container">
        <div className="selected-players">
          <h2>Selected Players</h2>
          {selectedPlayers.map(player => <div key={player}>{player}</div>)}
        </div>
      </div>
      <div className="base">
        <div className="score">score=0......
          <p className='center'>!!Score is update when project is live on server!!</p>
        </div>
      </div>
    </div>
  );
}

export default Games;

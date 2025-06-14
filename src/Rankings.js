// import React, { useState, useEffect } from 'react';
// import './Rankings.css';
// import rankings from './rankings.json';
// const Rankings = () => {
//   const [format, setFormat] = useState('t20');
//   const [category, setCategory] = useState('batting');

//   const formats = ['t20', 'odi', 'test'];
//   const categories = ['batting', 'bowling', 'all_rounders'];

//   const handleFormatChange = (e) => {
//     setFormat(e.target.value);
//   };

//   const handleCategoryChange = (e) => {
//     setCategory(e.target.value);
//   };

//   return (
//     <div className="rankings-container">
//       <h2>Player Rankings</h2>
//       <div className="selectors">
//         <select value={format} onChange={handleFormatChange}>
//           {formats.map((fmt) => (
//             <option key={fmt} value={fmt}>
//               {fmt.toUpperCase()}
//             </option>
//           ))}
//         </select>
//         <select value={category} onChange={handleCategoryChange}>
//           {categories.map((cat) => (
//             <option key={cat} value={cat}>
//               {cat.replace('_', ' ').toUpperCase()}
//             </option>
//           ))}
//         </select>
//       </div>
//       <div className="rankings-list">
//         {rankings[format][category].map((player) => (
//           <div key={player.serial_number} className="ranking-item">
//             <span>{player.serial_number}</span>
//             <span>{player.player}</span>
//             <span>{player.rating}</span>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Rankings;



import React, { useState } from 'react';
import './Rankings.css';
import rankings from './rankings.json';

const Rankings = () => {
  const [format, setFormat] = useState('t20');
  const [category, setCategory] = useState('batting');

  const formats = ['t20', 'odi', 'test'];
  const categories = ['batting', 'bowling', 'all_rounders'];

  const handleFormatChange = (e) => {
    setFormat(e.target.value);
  };

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };

  return (
    <div className="rankings-container">
      <h2>Player Rankings</h2>
      <div className="selectors">
        <select value={format} onChange={handleFormatChange}>
          {formats.map((fmt) => (
            <option key={fmt} value={fmt}>
              {fmt.toUpperCase()}
            </option>
          ))}
        </select>
        <select value={category} onChange={handleCategoryChange}>
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat.replace('_', ' ').toUpperCase()}
            </option>
          ))}
        </select>
      </div>
      <div className="rankings-list">
        <div className="ranking-header">
          <span>Position</span>
          <span>Player</span>
          <span>Rating</span>
        </div>
        {rankings[format][category].map((player) => (
          <div key={player.serial_number} className="ranking-item">
            <span>{player.serial_number}</span>
            <span>{player.player}</span>
            <span>{player.rating}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Rankings;

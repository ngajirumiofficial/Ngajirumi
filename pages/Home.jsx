import React from 'react';

const Home = () => {
  const rooms = [1, 2, 3, 4, 5];
  return (
    <div>
      <h2>Ruang Belajar Ngajirumi</h2>
      <ul>
        {rooms.map(num => (
          <li key={num}>
            Ngajirumi {num} <span role="img" aria-label="arrow">→</span> Perpustakaan
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;

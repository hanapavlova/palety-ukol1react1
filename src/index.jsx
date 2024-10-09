import React from 'react';
import { createRoot } from 'react-dom/client';
import './style.css';

import { Palette } from './components/Palette';
import { palettes } from './palettes';

const App = () => {
  return (
    <div className="container">
      <header>
        <h1>Barevné palety</h1>
      </header>
      <main>
        < Palette paletteData={palettes[0]} />
        < Palette paletteData={palettes[1]} />
        < Palette paletteData={palettes[2]} />
        < Palette paletteData={palettes[3]} />
      </main>
      <footer>
        <p>Czechitas, Digitální akademie: Web</p>
      </footer>
    </div>
  );
};

createRoot(
  document.querySelector('#app'),
).render(< App />);

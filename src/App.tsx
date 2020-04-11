import React from 'react';

import useMousePosition from "./hooks/useMousePosition";

function App() {
  const position = useMousePosition();
  console.log(position)
  return (
    <div className="App">
      <header className="App-header">
        
      </header>
    </div>
  );
}

export default App;

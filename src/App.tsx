import React from 'react';
import useMousePosition from "./hooks/useMousePosition";

import Menu from "./lib/Menu/Menu";
import MenuItem from "./lib/Menu/MenuItem";

function App() {
  const position = useMousePosition();
  console.log(position)
  return (
    <div className="App">
      <Menu mode="vertical">
        <MenuItem index={0}>1</MenuItem>
        <MenuItem index={1}>2</MenuItem>
        <MenuItem index={2}>3</MenuItem>
      </Menu>
    </div>
  );
}

export default App;

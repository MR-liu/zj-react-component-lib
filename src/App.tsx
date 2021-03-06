import React from 'react';
import useMousePosition from "./hooks/useMousePosition";

import Menu from "./lib/Menu/Menu";
import MenuItem from "./lib/Menu/MenuItem";
import SubMenu from "./lib/Menu/SubMenu";


function App() {
  const position = useMousePosition();
  console.log(position)
  return (
    <div className="App">
      <Menu mode="vertical" defaultIndex = {2}>
        <MenuItem>1</MenuItem>
        <MenuItem>2</MenuItem>
        <MenuItem>3</MenuItem>
        <SubMenu title="jshgdjhksgfj">
          <MenuItem>1</MenuItem>
          <MenuItem>2</MenuItem>
          <MenuItem>3</MenuItem>
        </SubMenu>
      </Menu>
    </div>
  );
}

export default App;

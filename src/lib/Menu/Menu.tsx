import React, { CSSProperties, createContext, useState } from 'react';
import classNames from 'classnames';


type MenuMode = 'horizontal' | 'vertical';
type selectCallback = (selectedIndex: number) => void;
export interface MenuProps {
  defaultIndex?: number;
  className ?: string;
  mode ?: MenuMode;
  style ?: CSSProperties;
  onSelect?: selectCallback;
}

export interface IMenuContext {
  index: number;
  onSelect?: selectCallback;
  mode?: MenuMode;
  defaultOpenSubMenus?: string[];  
}

export const MenuContext = createContext<IMenuContext>({ index: 0 })

const Menu: React.FC<MenuProps> = (props) => {
  const { className, mode, style, children, defaultIndex = 0, onSelect } = props;
  const [ currentActive, setActive ] = useState(defaultIndex);

  const classes = classNames('lzj-menus', className, `menu-${mode}`);
  const handleClick = (index: number) => {
    setActive(index);
    !!onSelect && onSelect(index);
  }
  const passedContext: IMenuContext = {
    index: currentActive,
    onSelect: handleClick,
  }

  return (
    <ul
      className={classes}
      style={style}
    >
      <MenuContext.Provider value={passedContext}>
        {
          children
        }
      </MenuContext.Provider>
    </ul>
  )
}

Menu.defaultProps = {
  defaultIndex: 0,
  mode: 'horizontal'
}

export default Menu;
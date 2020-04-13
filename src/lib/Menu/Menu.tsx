import React, { CSSProperties, createContext, useState } from 'react';
import classNames from 'classnames';
import FunctionComponentElement from 'react';
import { MenuItemProps } from './MenuItem';


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

  const renderChildren = () => {
    return React.Children.map(children, (child, index) => {
      const childElement = child as React.FunctionComponentElement<MenuItemProps>
      const { type = {name : ''}} = childElement
      const { name = '' } = type;

      if (name === 'MenuItem' || name === 'SubMenu') {
        return React.cloneElement(childElement, {
          index: +index
        })
      } else {
        throw "非MenuItem类型的不允许传入";
      }
    })
  }

  return (
    <ul
      className={classes}
      style={style}
    >
      <MenuContext.Provider value={passedContext}>
        {
          renderChildren()
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
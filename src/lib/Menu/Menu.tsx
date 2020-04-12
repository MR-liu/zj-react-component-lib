import React, { CSSProperties } from 'react';
import classNames from 'classnames';


type MenuMode = 'horizontal' | 'vertical'
export interface MenuProps {
  defaultIndex ?: number;
  className ?: string;
  mode ?: MenuMode;
  style ?: CSSProperties;
  onSelect?: (selectedIndex: number) => void;
}

export interface IMenuContext {
  index: string;
  onSelect?: (selectedIndex: string) => void;
  mode?: MenuMode;
  defaultOpenSubMenus?: string[];  
}

const Menu: React.FC<MenuProps> = (props) => {
  const { className, mode, style, children, defaultIndex } = props;
  // const [ currentActive, setActive ] = useState(defaultIndex)

  const classes = classNames('lzj-menus', className, `menu-${mode}`)

  return (
    <ul
      className={classes}
      style={style}
    >
      {
        children
      }
    </ul>
  )
}

Menu.defaultProps = {
  defaultIndex: 0,
  mode: 'horizontal'
}

export default Menu;
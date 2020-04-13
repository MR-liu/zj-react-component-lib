import React, { CSSProperties, useContext } from 'react';
import classNames from 'classnames'
import { MenuContext } from './Menu'

export interface MenuItemProps {
  index: number;
  disabled?: boolean;
  classname?: string;
  style?: CSSProperties;
}

const MenuItem:React.FC<MenuItemProps> = (props) => {
  const {index, disabled, classname, style, children } = props;
  const context = useContext(MenuContext)
  const classes = classNames('menu-item', classname, {
    'is-disabled': disabled,
    'is-active': context.index === index
  })

  const handleClick = () => {
    if (context.onSelect && !disabled) {
      context.onSelect(index);
    }
  }

  console.log(context, index,  context.index === index)
  return (
    <li
      className={classes}
      style={style}
      onClick={handleClick}
    >
      {
        children
      }
    </li>
  )
}

export default MenuItem;
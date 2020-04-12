import React, { CSSProperties } from 'react';
import classNames from 'classnames'

export interface MenuItemProps {
  index?: number;
  disabled?: boolean;
  classname?: string;
  style?: CSSProperties;
}

const MenuItem:React.FC<MenuItemProps> = (props) => {
  const {index, disabled, classname, style, children } = props;

  const classes = classNames('menu-item', classname, {
    'is-disabled': disabled,
  })

  return (
    <li
      className={classes}
      style={style}
    >
      {
        children
      }
    </li>
  )
}

export default MenuItem;
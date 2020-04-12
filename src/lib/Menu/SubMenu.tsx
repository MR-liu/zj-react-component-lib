import React, { CSSProperties } from 'react';
import classNames from 'classnames'

export interface SubMenuProps {
  index?: number;
  disabled?: boolean;
  classname?: string;
  style?: CSSProperties;
}

const SubMenu:React.FC<SubMenuProps> = (props) => {
  const {index, disabled, classname, style, children } = props;

  const classes = classNames('menu-sub', classname, {
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

export default SubMenu;
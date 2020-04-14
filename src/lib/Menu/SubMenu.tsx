import React, { CSSProperties, useContext, useState } from 'react';
import classNames from 'classnames'

import { MenuContext, IMenuContext } from './Menu'
import { MenuItemProps } from './MenuItem';

export interface SubMenuProps {
  index?: number;
  disabled?: boolean;
  classname?: string;
  style?: CSSProperties;
  isOpend?: boolean;
  title?: string;
}

const SubMenu:React.FC<SubMenuProps> = (props) => {
  const {index, disabled, classname, style, children, isOpend, title } = props;
  const [ menuOpen, setOpen ] = useState(isOpend)
  const context = useContext(MenuContext)
  const classes = classNames('menu-sub', classname, {
    'is-disabled': disabled,
    'is-active': context.index === index
  })

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault()
    setOpen(!menuOpen)
  }

  const handleMouse = (e: React.MouseEvent, menuOpen: boolean) => {
    e.preventDefault()
    setOpen(!menuOpen)
  }

  const clickEvents = context.mode === 'vertical' ? {
    onClick: handleClick
  } : {}
  const hoverEvents = context.mode !== 'vertical' ? {
    onMouseEnter: (e: React.MouseEvent) => { handleMouse(e, true)},
    onMouseLeave: (e: React.MouseEvent) => { handleMouse(e, false)}
  } : {}

  const renderChildren = () => {
    const subMenuClasses = classNames('subMenu', {
      'is-open': !menuOpen,
    })
    const child = React.Children.map(children, (child, index) => {
      const childElement = child as React.FunctionComponentElement<MenuItemProps>
      const { type = {name : ''}} = childElement
      const { name = '' } = type;

      if (name === 'MenuItem') {
        return React.cloneElement(childElement, {
          index: +index
        })
      } else {
        throw "非MenuItem类型的不允许传入";
      }
    })

    return (
      <ul className={subMenuClasses}>
          {child}
      </ul>
    );
  }

  return (
    <li
      className={classes}
      style={style}
      {...hoverEvents}
    >
      <div>{title}</div>
      {renderChildren()}
    </li>
  )
}

export default SubMenu;
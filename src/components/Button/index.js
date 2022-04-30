import React from 'react'
import PropTypes from 'prop-types'

import { Button } from '@mui/material'

import './Button.scss'

function ButtonComponent(props) {
  const {
    className,
    id,
    text,
    disabled,
    secondary,
    action,
    children,
  } = props
  return (
    <Button
      type="button"
      className={`Button ${className}-Button`}
      disabled={disabled}
      id={id}
      primary={!secondary ? 'true' : undefined}
      secondary={secondary ? 'true' : undefined}
      onClick={action}
    >
      {children}
      {text}
    </Button>
  )
}

ButtonComponent.propTypes = {
  className: PropTypes.string,
  id: PropTypes.string.isRequired,
  text: PropTypes.string,
  disabled: PropTypes.bool,
  secondary: PropTypes.bool,
  action: PropTypes.func,
  children: PropTypes.node,
}

ButtonComponent.defaultProps = {
  className: '',
  text: 'Click me',
  disabled: false,
  secondary: false,
  action: () => {},
  children: undefined,
}

export default ButtonComponent

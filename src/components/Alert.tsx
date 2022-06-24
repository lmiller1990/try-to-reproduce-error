import { VoidFunctionComponent } from 'react'
import React from 'react'
import classnames from 'classnames'
​
// import Button from '../Button'
// import Typography from '../Typography'
​
// import { AlertProps } from './types'
// import classes from './Alert.module.scss'
​
const classes = {} as any
const Alert: VoidFunctionComponent<any> = ({
  title,
  theme = 'light',
  message,
  type = 'info',
  className,
  action,
  ...otherProps
}) => {
  return (
    <div
      {...otherProps}
      className={classnames(
        // classes.Alert,
        // classes[`Alert--${type}`],
        // classes[`Alert--${theme}`],
        className
      )}
      role="alert"
    >
      <div className={classes.Alert__Content}>
        <div className={classes.Alert__Icon} />
        <div className={classes.Alert__Body}>
          <div format="bcs" weight="bold">
            {title}
          </div>
          {message}
​
          {action && (
            <button
              type="button"
              alt="text"
              fontWeight="normal"
              onClick={action.onClick}
              text={action.text}
              className={classes.Alert__Action}
            >button</button>
          )}
        </div>
      </div>
    </div>
  )
}
​
export default Alert
import { FC } from 'react'
import { ButtonProps } from './button.types'
import styles from './button.module.css'
import cn from 'classnames'

export const Button: FC<ButtonProps> = ({
	size = 'default',
	children,
	className,
	...props
}) => {
	return (
		<button className={cn(styles.button, styles[size], className)} {...props}>
			{children}
		</button>
	)
}

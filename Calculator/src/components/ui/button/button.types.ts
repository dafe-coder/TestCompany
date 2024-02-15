import { ReactNode } from 'react'
import React from 'react'

export interface ButtonProps
	extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	size?: 'default' | 'm'
	children: ReactNode
}

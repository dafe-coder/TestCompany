import React from 'react'
import { Button, Inner } from '../ui'
import styles from './calculator.module.css'

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9]

export const Calculator = () => {
	const [displayValue, setDisplayValue] = React.useState<string>('0')
	const [operandGeneral, setOperandGeneral] = React.useState<null | string>(
		null
	)

	const handleClickNumber = (value: string) => {
		setDisplayValue((initialValue) => {
			if (initialValue !== '0') {
				return initialValue + value
			}
			return value
		})
	}

	const switchOperand = (operand: string) => {
		if (
			operandGeneral &&
			displayValue.split('')[displayValue.split('').length - 1] !== operand
		) {
			sumAll()
			setOperandGeneral(null)
		} else if (!displayValue.includes(operand)) {
			setOperandGeneral(operand)
			setDisplayValue((prevDisplayValue) => `${prevDisplayValue}${operand}`)
		}
	}

	const mat = (str: string) => {
		var operators = '/*-+'
		for (var i = 0; i < 4; i++) {
			var op = operators.charAt(i)
			var pos = str.indexOf(op)
			if (pos > 0 && operators.indexOf(str.charAt(pos - 1)) === -1) {
				var left: number = mat(str.substr(0, pos))
				var right: number = mat(str.substr(pos + 1))
				switch (op) {
					case '/':
						return left / right
					case '*':
						return left * right
					case '-':
						return left - right
					case '+':
						return left + right
				}
			}
		}
		return Number(str)
	}

	const sumAll = () => {
		setDisplayValue((initialValue) => {
			const result = mat(initialValue)
			return result.toString()
		})
	}

	const clear = () => {
		setOperandGeneral(null)
		setDisplayValue('0')
	}

	return (
		<div className={styles.calculator}>
			<Inner value={displayValue} />
			<div className={styles.wrapKeyboard}>
				<Button className={styles.clear} onClick={clear}>
					Clear
				</Button>
				<Button
					className={styles.del}
					onClick={() =>
						setDisplayValue((state) =>
							state.length > 1 ? state.slice(0, -1) : '0'
						)
					}
				>
					Del
				</Button>

				{nums.map((n) => (
					<Button
						className={styles.btn}
						onClick={() => handleClickNumber(n.toString())}
					>
						{n}
					</Button>
				))}

				<Button className={styles.zero} onClick={() => handleClickNumber('0')}>
					0
				</Button>
				<Button className={styles.enter} onClick={sumAll}>
					=
				</Button>
				<Button className={styles.q1} onClick={() => switchOperand('/')}>
					/
				</Button>
				<Button className={styles.q2} onClick={() => switchOperand('*')}>
					*
				</Button>
				<Button className={styles.q3} onClick={() => switchOperand('-')}>
					-
				</Button>
				<Button className={styles.q4} onClick={() => switchOperand('+')}>
					+
				</Button>
			</div>
		</div>
	)
}

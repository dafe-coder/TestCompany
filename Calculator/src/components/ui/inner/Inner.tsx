import { FC } from 'react'
import { InnerProps } from './inner.types'
import styles from './inner.module.css'

export const Inner: FC<InnerProps> = ({ value }) => {
	return <div className={styles.inner}>{value}</div>
}

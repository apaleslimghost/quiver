import type { FC, ComponentProps, JSXElementConstructor } from 'react'
import * as form from './form.css'

export const Input: FC<ComponentProps<'input'>> = ({ className, ...props }) => (
	<input {...props} className={`${form.input} ${className ?? ''}`} />
)
export const SearchInput: FC<ComponentProps<'input'>> = (props) => (
	<Input type='search' className={form.searchInput} {...props} />
)
export const Select: FC<ComponentProps<'select'>> = (props) => (
	<select {...props} className={form.select} />
)
export const Button: FC<ComponentProps<'button'>> = (props) => (
	<button {...props} className={form.button} />
)

export const Form = <P extends object>({
	as: As = 'form',
	...props
}: {
	as?: JSXElementConstructor<P> | keyof JSX.IntrinsicElements
} & P) => <As {...(props as P)} className={form.form} />

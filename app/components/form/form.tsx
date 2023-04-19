import { FC, HTMLProps, Component, ComponentProps, JSXElementConstructor  } from "react";
import * as form from './form.css'

export const Input: FC<ComponentProps<'input'>> = props => <input {...props} className={form.input} />

export const Button: FC<ComponentProps<'button'>> = props => <button {...props} className={form.button} />

export const Form = <P extends object>({ as: As = 'form', ...props }: {
	as?: JSXElementConstructor<P> | keyof JSX.IntrinsicElements
} & P) => <As {...(props as P)} className={form.form} />

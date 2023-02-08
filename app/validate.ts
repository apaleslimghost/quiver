import util from 'util'

type OutputSchemaValue = 'string' | 'number' | [OutputSchemaValue] | OutputSchema
type OutputSchema = { [key: string]: OutputSchemaValue }

type OutputTypeValue<V extends OutputSchemaValue> =
	V extends 'string' ? string
 : V extends 'number' ? number
 : V extends [infer S extends OutputSchemaValue] ? Array<OutputTypeValue<S>>
 : V extends OutputSchema ? OutputType<V>
 : never

type OutputType<S extends OutputSchema> = { [Key in keyof S]: OutputTypeValue<S[Key]> }

const validationError = (type: string, value: any) => {
	throw new Error(`expected ${type}, got ${util.inspect(value)}`)
}

const coerceValue = <V extends OutputSchemaValue, O extends OutputTypeValue<V>>(type: V, value: any): O => {
	if(type === 'string') {
		return `${value}` as O
	}

	if(type === 'number') {
		return parseFloat(value) as O
	}

	if(Array.isArray(type)) {
		if(!Array.isArray(value)) {
			return validationError('array', value)
		} else {
			return value.map(item => coerceValue(type[0], item)) as O
		}
	}

	return coerce(type, value) as O
}

export function coerce<S extends OutputSchema, I extends Partial<{[K in keyof S]: any}>>(schema: S, input: I): OutputType<S> {
	const output: Partial<OutputType<S>> = {}

	for(const key in schema) {
		try {
			output[key] = coerceValue(schema[key], input[key])
		} catch(error) {
			if(error instanceof Error) {
				error.message += ` for key ${key}`
			}

			throw error
		}
	}

	return output as OutputType<S>
}

const validateValue = <V extends OutputSchemaValue, O extends OutputTypeValue<V>>(type: V, value: any) => {
	if(type === 'string') {
		if(typeof value !== 'string') {
			validationError('string', value)
		}
	}

	if(type === 'number') {
		validationError('number', value)
	}

	if(Array.isArray(type)) {
		if(!Array.isArray(value)) {
			validationError('array', value)
		}
	}

	if(value && typeof value !== 'object') {
		validationError('object', value)
	}

	validate(type as OutputSchema, value)
}

export function validate<S extends OutputSchema>(schema: S, input: Record<string, any>): asserts input is OutputType<S> {
	for(const key in schema) {
		try {
			validateValue(schema[key], input[key])
		} catch(error) {
			if(error instanceof Error) {
				error.message += ` for key ${key}`
			}

			throw error
		}
	}
}

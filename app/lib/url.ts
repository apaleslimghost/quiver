import { Prisma, PrismaClient, PrismaPromise } from "@prisma/client";
import pluralize from 'pluralize'

// type crimes to get the type of a prisma object from its name
type PrismaPromiseValue<T> = T extends PrismaPromise<infer V> ? V : never
type GetPrismaModel<T extends Lowercase<Prisma.ModelName>> = NonNullable<PrismaPromiseValue<ReturnType<PrismaClient[T]["findFirst"]>>>

export default function url<T extends Lowercase<Prisma.ModelName>>(name: T, object: Partial<GetPrismaModel<T>> | string): string {
	return `/${pluralize(name)}/${typeof object === 'string' ? object : object.id}`
}

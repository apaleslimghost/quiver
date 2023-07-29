import type { Category, Location } from '@prisma/client'

import db from './db.server'

export type ParentModels = {
	Location: Location
	Category: Category
}

export const ancestors = (model: keyof ParentModels, parentId: number) =>
	db.$queryRawUnsafe<ParentModels[typeof model][]>(
		`
WITH RECURSIVE ancestors AS (
	SELECT id, name, "parentId"
	FROM "${model}"
	WHERE id = $1
	UNION ALL
	SELECT l.id, l.name, l."parentId"
	FROM "${model}" l
	JOIN ancestors a ON a."parentId" = l.id
)
SELECT * FROM ancestors;
`,
		parentId,
	)

export const descendents = (model: keyof ParentModels, id: number) =>
	db.$queryRawUnsafe<ParentModels[typeof model][]>(
		`
WITH RECURSIVE descendents AS (
	SELECT id, name, "parentId"
	FROM "${model}"
	WHERE "parentId" = $1
	UNION ALL
	SELECT l.id, l.name, l."parentId"
	FROM "${model}" l
	JOIN descendents cs ON cs.id = l."parentId"
)
SELECT * FROM descendents;
`,
		id,
	)

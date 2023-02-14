import db from './db.server'
import {Location} from '@prisma/client'

export const ancestors = (parentId: number) => db.$queryRaw<Location[]>`
WITH RECURSIVE ancestors AS (
	SELECT id, name, "parentId"
	FROM "Location"
	WHERE id = ${parentId}
	UNION ALL
	SELECT l.id, l.name, l."parentId"
	FROM "Location" l
	JOIN ancestors a ON a."parentId" = l.id
)
SELECT * FROM ancestors;
`

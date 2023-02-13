import { z } from 'zod';
import { IntFilterObjectSchema } from './IntFilter.schema';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { ItemListRelationFilterObjectSchema } from './ItemListRelationFilter.schema';
import { IntNullableFilterObjectSchema } from './IntNullableFilter.schema';
import { LocationRelationFilterObjectSchema } from './LocationRelationFilter.schema';
import { LocationListRelationFilterObjectSchema } from './LocationListRelationFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.LocationWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => LocationWhereInputObjectSchema),
        z.lazy(() => LocationWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => LocationWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => LocationWhereInputObjectSchema),
        z.lazy(() => LocationWhereInputObjectSchema).array(),
      ])
      .optional(),
    id: z.union([z.lazy(() => IntFilterObjectSchema), z.number()]).optional(),
    name: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    description: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    items: z.lazy(() => ItemListRelationFilterObjectSchema).optional(),
    parentId: z
      .union([z.lazy(() => IntNullableFilterObjectSchema), z.number()])
      .optional()
      .nullable(),
    parent: z
      .union([
        z.lazy(() => LocationRelationFilterObjectSchema),
        z.lazy(() => LocationWhereInputObjectSchema),
      ])
      .optional()
      .nullable(),
    children: z.lazy(() => LocationListRelationFilterObjectSchema).optional(),
  })
  .strict();

export const LocationWhereInputObjectSchema = Schema;

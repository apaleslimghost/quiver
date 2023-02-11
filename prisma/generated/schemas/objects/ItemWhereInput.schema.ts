import { z } from 'zod';
import { IntFilterObjectSchema } from './IntFilter.schema';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { LocationRelationFilterObjectSchema } from './LocationRelationFilter.schema';
import { LocationWhereInputObjectSchema } from './LocationWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ItemWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => ItemWhereInputObjectSchema),
        z.lazy(() => ItemWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => ItemWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => ItemWhereInputObjectSchema),
        z.lazy(() => ItemWhereInputObjectSchema).array(),
      ])
      .optional(),
    id: z.union([z.lazy(() => IntFilterObjectSchema), z.number()]).optional(),
    name: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    description: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    locationId: z
      .union([z.lazy(() => IntFilterObjectSchema), z.number()])
      .optional(),
    location: z
      .union([
        z.lazy(() => LocationRelationFilterObjectSchema),
        z.lazy(() => LocationWhereInputObjectSchema),
      ])
      .optional(),
  })
  .strict();

export const ItemWhereInputObjectSchema = Schema;

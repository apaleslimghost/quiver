import { z } from 'zod';
import { ItemWhereInputObjectSchema } from './ItemWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ItemListRelationFilter> = z
  .object({
    every: z.lazy(() => ItemWhereInputObjectSchema).optional(),
    some: z.lazy(() => ItemWhereInputObjectSchema).optional(),
    none: z.lazy(() => ItemWhereInputObjectSchema).optional(),
  })
  .strict();

export const ItemListRelationFilterObjectSchema = Schema;

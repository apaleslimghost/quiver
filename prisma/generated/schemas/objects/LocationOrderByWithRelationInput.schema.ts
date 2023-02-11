import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { ItemOrderByRelationAggregateInputObjectSchema } from './ItemOrderByRelationAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.LocationOrderByWithRelationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    name: z.lazy(() => SortOrderSchema).optional(),
    description: z.lazy(() => SortOrderSchema).optional(),
    items: z
      .lazy(() => ItemOrderByRelationAggregateInputObjectSchema)
      .optional(),
  })
  .strict();

export const LocationOrderByWithRelationInputObjectSchema = Schema;

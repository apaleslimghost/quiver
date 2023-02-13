import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { ItemOrderByRelationAggregateInputObjectSchema } from './ItemOrderByRelationAggregateInput.schema';
import { LocationOrderByRelationAggregateInputObjectSchema } from './LocationOrderByRelationAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.LocationOrderByWithRelationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    name: z.lazy(() => SortOrderSchema).optional(),
    description: z.lazy(() => SortOrderSchema).optional(),
    items: z
      .lazy(() => ItemOrderByRelationAggregateInputObjectSchema)
      .optional(),
    parentId: z.lazy(() => SortOrderSchema).optional(),
    parent: z
      .lazy(() => LocationOrderByWithRelationInputObjectSchema)
      .optional(),
    children: z
      .lazy(() => LocationOrderByRelationAggregateInputObjectSchema)
      .optional(),
  })
  .strict();

export const LocationOrderByWithRelationInputObjectSchema = Schema;

import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { LocationCountOrderByAggregateInputObjectSchema } from './LocationCountOrderByAggregateInput.schema';
import { LocationAvgOrderByAggregateInputObjectSchema } from './LocationAvgOrderByAggregateInput.schema';
import { LocationMaxOrderByAggregateInputObjectSchema } from './LocationMaxOrderByAggregateInput.schema';
import { LocationMinOrderByAggregateInputObjectSchema } from './LocationMinOrderByAggregateInput.schema';
import { LocationSumOrderByAggregateInputObjectSchema } from './LocationSumOrderByAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.LocationOrderByWithAggregationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    name: z.lazy(() => SortOrderSchema).optional(),
    description: z.lazy(() => SortOrderSchema).optional(),
    _count: z
      .lazy(() => LocationCountOrderByAggregateInputObjectSchema)
      .optional(),
    _avg: z.lazy(() => LocationAvgOrderByAggregateInputObjectSchema).optional(),
    _max: z.lazy(() => LocationMaxOrderByAggregateInputObjectSchema).optional(),
    _min: z.lazy(() => LocationMinOrderByAggregateInputObjectSchema).optional(),
    _sum: z.lazy(() => LocationSumOrderByAggregateInputObjectSchema).optional(),
  })
  .strict();

export const LocationOrderByWithAggregationInputObjectSchema = Schema;

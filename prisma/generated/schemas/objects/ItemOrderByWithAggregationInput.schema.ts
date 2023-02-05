import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { ItemCountOrderByAggregateInputObjectSchema } from './ItemCountOrderByAggregateInput.schema';
import { ItemAvgOrderByAggregateInputObjectSchema } from './ItemAvgOrderByAggregateInput.schema';
import { ItemMaxOrderByAggregateInputObjectSchema } from './ItemMaxOrderByAggregateInput.schema';
import { ItemMinOrderByAggregateInputObjectSchema } from './ItemMinOrderByAggregateInput.schema';
import { ItemSumOrderByAggregateInputObjectSchema } from './ItemSumOrderByAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ItemOrderByWithAggregationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    name: z.lazy(() => SortOrderSchema).optional(),
    description: z.lazy(() => SortOrderSchema).optional(),
    _count: z.lazy(() => ItemCountOrderByAggregateInputObjectSchema).optional(),
    _avg: z.lazy(() => ItemAvgOrderByAggregateInputObjectSchema).optional(),
    _max: z.lazy(() => ItemMaxOrderByAggregateInputObjectSchema).optional(),
    _min: z.lazy(() => ItemMinOrderByAggregateInputObjectSchema).optional(),
    _sum: z.lazy(() => ItemSumOrderByAggregateInputObjectSchema).optional(),
  })
  .strict();

export const ItemOrderByWithAggregationInputObjectSchema = Schema;

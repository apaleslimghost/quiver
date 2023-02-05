import { z } from 'zod';
import { ItemOrderByWithRelationInputObjectSchema } from './objects/ItemOrderByWithRelationInput.schema';
import { ItemWhereInputObjectSchema } from './objects/ItemWhereInput.schema';
import { ItemWhereUniqueInputObjectSchema } from './objects/ItemWhereUniqueInput.schema';
import { ItemCountAggregateInputObjectSchema } from './objects/ItemCountAggregateInput.schema';
import { ItemMinAggregateInputObjectSchema } from './objects/ItemMinAggregateInput.schema';
import { ItemMaxAggregateInputObjectSchema } from './objects/ItemMaxAggregateInput.schema';
import { ItemAvgAggregateInputObjectSchema } from './objects/ItemAvgAggregateInput.schema';
import { ItemSumAggregateInputObjectSchema } from './objects/ItemSumAggregateInput.schema';

export const ItemAggregateSchema = z.object({
  orderBy: z
    .union([
      ItemOrderByWithRelationInputObjectSchema,
      ItemOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  where: ItemWhereInputObjectSchema.optional(),
  cursor: ItemWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  _count: z
    .union([z.literal(true), ItemCountAggregateInputObjectSchema])
    .optional(),
  _min: ItemMinAggregateInputObjectSchema.optional(),
  _max: ItemMaxAggregateInputObjectSchema.optional(),
  _avg: ItemAvgAggregateInputObjectSchema.optional(),
  _sum: ItemSumAggregateInputObjectSchema.optional(),
});

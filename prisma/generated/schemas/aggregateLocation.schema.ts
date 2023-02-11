import { z } from 'zod';
import { LocationOrderByWithRelationInputObjectSchema } from './objects/LocationOrderByWithRelationInput.schema';
import { LocationWhereInputObjectSchema } from './objects/LocationWhereInput.schema';
import { LocationWhereUniqueInputObjectSchema } from './objects/LocationWhereUniqueInput.schema';
import { LocationCountAggregateInputObjectSchema } from './objects/LocationCountAggregateInput.schema';
import { LocationMinAggregateInputObjectSchema } from './objects/LocationMinAggregateInput.schema';
import { LocationMaxAggregateInputObjectSchema } from './objects/LocationMaxAggregateInput.schema';
import { LocationAvgAggregateInputObjectSchema } from './objects/LocationAvgAggregateInput.schema';
import { LocationSumAggregateInputObjectSchema } from './objects/LocationSumAggregateInput.schema';

export const LocationAggregateSchema = z.object({
  orderBy: z
    .union([
      LocationOrderByWithRelationInputObjectSchema,
      LocationOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  where: LocationWhereInputObjectSchema.optional(),
  cursor: LocationWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  _count: z
    .union([z.literal(true), LocationCountAggregateInputObjectSchema])
    .optional(),
  _min: LocationMinAggregateInputObjectSchema.optional(),
  _max: LocationMaxAggregateInputObjectSchema.optional(),
  _avg: LocationAvgAggregateInputObjectSchema.optional(),
  _sum: LocationSumAggregateInputObjectSchema.optional(),
});

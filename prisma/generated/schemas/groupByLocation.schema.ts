import { z } from 'zod';
import { LocationWhereInputObjectSchema } from './objects/LocationWhereInput.schema';
import { LocationOrderByWithAggregationInputObjectSchema } from './objects/LocationOrderByWithAggregationInput.schema';
import { LocationScalarWhereWithAggregatesInputObjectSchema } from './objects/LocationScalarWhereWithAggregatesInput.schema';
import { LocationScalarFieldEnumSchema } from './enums/LocationScalarFieldEnum.schema';

export const LocationGroupBySchema = z.object({
  where: LocationWhereInputObjectSchema.optional(),
  orderBy: z
    .union([
      LocationOrderByWithAggregationInputObjectSchema,
      LocationOrderByWithAggregationInputObjectSchema.array(),
    ])
    .optional(),
  having: LocationScalarWhereWithAggregatesInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  by: z.array(LocationScalarFieldEnumSchema),
});

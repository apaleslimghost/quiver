import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ItemAvgAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    locationId: z.literal(true).optional(),
  })
  .strict();

export const ItemAvgAggregateInputObjectSchema = Schema;

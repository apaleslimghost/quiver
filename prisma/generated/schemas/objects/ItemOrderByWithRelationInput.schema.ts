import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { LocationOrderByWithRelationInputObjectSchema } from './LocationOrderByWithRelationInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ItemOrderByWithRelationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    name: z.lazy(() => SortOrderSchema).optional(),
    description: z.lazy(() => SortOrderSchema).optional(),
    locationId: z.lazy(() => SortOrderSchema).optional(),
    location: z
      .lazy(() => LocationOrderByWithRelationInputObjectSchema)
      .optional(),
  })
  .strict();

export const ItemOrderByWithRelationInputObjectSchema = Schema;

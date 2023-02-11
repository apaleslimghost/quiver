import { z } from 'zod';
import { LocationCreateNestedOneWithoutItemsInputObjectSchema } from './LocationCreateNestedOneWithoutItemsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ItemCreateInput> = z
  .object({
    name: z.string(),
    description: z.string(),
    location: z.lazy(
      () => LocationCreateNestedOneWithoutItemsInputObjectSchema,
    ),
  })
  .strict();

export const ItemCreateInputObjectSchema = Schema;

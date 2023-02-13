import { z } from 'zod';
import { ItemUncheckedCreateNestedManyWithoutLocationInputObjectSchema } from './ItemUncheckedCreateNestedManyWithoutLocationInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.LocationUncheckedCreateWithoutChildrenInput> = z
  .object({
    id: z.number().optional(),
    name: z.string(),
    description: z.string(),
    items: z
      .lazy(() => ItemUncheckedCreateNestedManyWithoutLocationInputObjectSchema)
      .optional(),
    parentId: z.number().optional().nullable(),
  })
  .strict();

export const LocationUncheckedCreateWithoutChildrenInputObjectSchema = Schema;

import { z } from 'zod';
import { LocationUncheckedCreateNestedManyWithoutParentInputObjectSchema } from './LocationUncheckedCreateNestedManyWithoutParentInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.LocationUncheckedCreateWithoutItemsInput> = z
  .object({
    id: z.number().optional(),
    name: z.string(),
    description: z.string(),
    parentId: z.number().optional().nullable(),
    children: z
      .lazy(
        () => LocationUncheckedCreateNestedManyWithoutParentInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const LocationUncheckedCreateWithoutItemsInputObjectSchema = Schema;
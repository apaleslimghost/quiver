import { z } from 'zod';
import { LocationCreateNestedOneWithoutChildrenInputObjectSchema } from './LocationCreateNestedOneWithoutChildrenInput.schema';
import { LocationCreateNestedManyWithoutParentInputObjectSchema } from './LocationCreateNestedManyWithoutParentInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.LocationCreateWithoutItemsInput> = z
  .object({
    name: z.string(),
    description: z.string(),
    parent: z
      .lazy(() => LocationCreateNestedOneWithoutChildrenInputObjectSchema)
      .optional(),
    children: z
      .lazy(() => LocationCreateNestedManyWithoutParentInputObjectSchema)
      .optional(),
  })
  .strict();

export const LocationCreateWithoutItemsInputObjectSchema = Schema;
import { z } from 'zod';
import { ItemCreateNestedManyWithoutLocationInputObjectSchema } from './ItemCreateNestedManyWithoutLocationInput.schema';
import { LocationCreateNestedManyWithoutParentInputObjectSchema } from './LocationCreateNestedManyWithoutParentInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.LocationCreateWithoutParentInput> = z
  .object({
    name: z.string(),
    description: z.string(),
    items: z
      .lazy(() => ItemCreateNestedManyWithoutLocationInputObjectSchema)
      .optional(),
    children: z
      .lazy(() => LocationCreateNestedManyWithoutParentInputObjectSchema)
      .optional(),
  })
  .strict();

export const LocationCreateWithoutParentInputObjectSchema = Schema;

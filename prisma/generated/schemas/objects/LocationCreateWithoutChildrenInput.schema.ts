import { z } from 'zod';
import { ItemCreateNestedManyWithoutLocationInputObjectSchema } from './ItemCreateNestedManyWithoutLocationInput.schema';
import { LocationCreateNestedOneWithoutChildrenInputObjectSchema } from './LocationCreateNestedOneWithoutChildrenInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.LocationCreateWithoutChildrenInput> = z
  .object({
    name: z.string(),
    description: z.string(),
    items: z
      .lazy(() => ItemCreateNestedManyWithoutLocationInputObjectSchema)
      .optional(),
    parent: z
      .lazy(() => LocationCreateNestedOneWithoutChildrenInputObjectSchema)
      .optional(),
  })
  .strict();

export const LocationCreateWithoutChildrenInputObjectSchema = Schema;

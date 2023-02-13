import { z } from 'zod';
import { ItemCreateNestedManyWithoutLocationInputObjectSchema } from './ItemCreateNestedManyWithoutLocationInput.schema';
import { LocationCreateNestedOneWithoutChildrenInputObjectSchema } from './LocationCreateNestedOneWithoutChildrenInput.schema';
import { LocationCreateNestedManyWithoutParentInputObjectSchema } from './LocationCreateNestedManyWithoutParentInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.LocationCreateInput> = z
  .object({
    name: z.string(),
    description: z.string(),
    items: z
      .lazy(() => ItemCreateNestedManyWithoutLocationInputObjectSchema)
      .optional(),
    parent: z
      .lazy(() => LocationCreateNestedOneWithoutChildrenInputObjectSchema)
      .optional(),
    children: z
      .lazy(() => LocationCreateNestedManyWithoutParentInputObjectSchema)
      .optional(),
  })
  .strict();

export const LocationCreateInputObjectSchema = Schema;

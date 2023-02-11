import { z } from 'zod';
import { ItemCreateNestedManyWithoutLocationInputObjectSchema } from './ItemCreateNestedManyWithoutLocationInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.LocationCreateInput> = z
  .object({
    name: z.string(),
    description: z.string(),
    items: z
      .lazy(() => ItemCreateNestedManyWithoutLocationInputObjectSchema)
      .optional(),
  })
  .strict();

export const LocationCreateInputObjectSchema = Schema;

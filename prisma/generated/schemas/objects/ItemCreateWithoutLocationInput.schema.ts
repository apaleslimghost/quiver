import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ItemCreateWithoutLocationInput> = z
  .object({
    name: z.string(),
    description: z.string(),
  })
  .strict();

export const ItemCreateWithoutLocationInputObjectSchema = Schema;

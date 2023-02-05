import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ItemCreateManyInput> = z
  .object({
    id: z.number().optional(),
    name: z.string(),
    description: z.string(),
  })
  .strict();

export const ItemCreateManyInputObjectSchema = Schema;

import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ItemUncheckedCreateInput> = z
  .object({
    id: z.number().optional(),
    name: z.string(),
    description: z.string(),
    locationId: z.number(),
  })
  .strict();

export const ItemUncheckedCreateInputObjectSchema = Schema;

import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.LocationCreateManyInput> = z
  .object({
    id: z.number().optional(),
    name: z.string(),
    description: z.string(),
    parentId: z.number().optional().nullable(),
  })
  .strict();

export const LocationCreateManyInputObjectSchema = Schema;

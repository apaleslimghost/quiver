import { z } from 'zod';
import { ItemCreateManyLocationInputObjectSchema } from './ItemCreateManyLocationInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ItemCreateManyLocationInputEnvelope> = z
  .object({
    data: z.lazy(() => ItemCreateManyLocationInputObjectSchema).array(),
    skipDuplicates: z.boolean().optional(),
  })
  .strict();

export const ItemCreateManyLocationInputEnvelopeObjectSchema = Schema;

import { z } from 'zod';
import { LocationCreateManyParentInputObjectSchema } from './LocationCreateManyParentInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.LocationCreateManyParentInputEnvelope> = z
  .object({
    data: z.lazy(() => LocationCreateManyParentInputObjectSchema).array(),
    skipDuplicates: z.boolean().optional(),
  })
  .strict();

export const LocationCreateManyParentInputEnvelopeObjectSchema = Schema;

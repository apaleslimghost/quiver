import { z } from 'zod';
import { LocationWhereInputObjectSchema } from './LocationWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.LocationRelationFilter> = z
  .object({
    is: z
      .lazy(() => LocationWhereInputObjectSchema)
      .optional()
      .nullable(),
    isNot: z
      .lazy(() => LocationWhereInputObjectSchema)
      .optional()
      .nullable(),
  })
  .strict();

export const LocationRelationFilterObjectSchema = Schema;

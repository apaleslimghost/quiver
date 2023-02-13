import { z } from 'zod';
import { LocationUpdateWithoutChildrenInputObjectSchema } from './LocationUpdateWithoutChildrenInput.schema';
import { LocationUncheckedUpdateWithoutChildrenInputObjectSchema } from './LocationUncheckedUpdateWithoutChildrenInput.schema';
import { LocationCreateWithoutChildrenInputObjectSchema } from './LocationCreateWithoutChildrenInput.schema';
import { LocationUncheckedCreateWithoutChildrenInputObjectSchema } from './LocationUncheckedCreateWithoutChildrenInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.LocationUpsertWithoutChildrenInput> = z
  .object({
    update: z.union([
      z.lazy(() => LocationUpdateWithoutChildrenInputObjectSchema),
      z.lazy(() => LocationUncheckedUpdateWithoutChildrenInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => LocationCreateWithoutChildrenInputObjectSchema),
      z.lazy(() => LocationUncheckedCreateWithoutChildrenInputObjectSchema),
    ]),
  })
  .strict();

export const LocationUpsertWithoutChildrenInputObjectSchema = Schema;

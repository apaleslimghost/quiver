import { z } from 'zod';
import { LocationUpdateWithoutItemsInputObjectSchema } from './LocationUpdateWithoutItemsInput.schema';
import { LocationUncheckedUpdateWithoutItemsInputObjectSchema } from './LocationUncheckedUpdateWithoutItemsInput.schema';
import { LocationCreateWithoutItemsInputObjectSchema } from './LocationCreateWithoutItemsInput.schema';
import { LocationUncheckedCreateWithoutItemsInputObjectSchema } from './LocationUncheckedCreateWithoutItemsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.LocationUpsertWithoutItemsInput> = z
  .object({
    update: z.union([
      z.lazy(() => LocationUpdateWithoutItemsInputObjectSchema),
      z.lazy(() => LocationUncheckedUpdateWithoutItemsInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => LocationCreateWithoutItemsInputObjectSchema),
      z.lazy(() => LocationUncheckedCreateWithoutItemsInputObjectSchema),
    ]),
  })
  .strict();

export const LocationUpsertWithoutItemsInputObjectSchema = Schema;

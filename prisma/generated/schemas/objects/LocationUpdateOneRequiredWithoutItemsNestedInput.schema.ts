import { z } from 'zod';
import { LocationCreateWithoutItemsInputObjectSchema } from './LocationCreateWithoutItemsInput.schema';
import { LocationUncheckedCreateWithoutItemsInputObjectSchema } from './LocationUncheckedCreateWithoutItemsInput.schema';
import { LocationCreateOrConnectWithoutItemsInputObjectSchema } from './LocationCreateOrConnectWithoutItemsInput.schema';
import { LocationUpsertWithoutItemsInputObjectSchema } from './LocationUpsertWithoutItemsInput.schema';
import { LocationWhereUniqueInputObjectSchema } from './LocationWhereUniqueInput.schema';
import { LocationUpdateWithoutItemsInputObjectSchema } from './LocationUpdateWithoutItemsInput.schema';
import { LocationUncheckedUpdateWithoutItemsInputObjectSchema } from './LocationUncheckedUpdateWithoutItemsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.LocationUpdateOneRequiredWithoutItemsNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => LocationCreateWithoutItemsInputObjectSchema),
          z.lazy(() => LocationUncheckedCreateWithoutItemsInputObjectSchema),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(() => LocationCreateOrConnectWithoutItemsInputObjectSchema)
        .optional(),
      upsert: z
        .lazy(() => LocationUpsertWithoutItemsInputObjectSchema)
        .optional(),
      connect: z.lazy(() => LocationWhereUniqueInputObjectSchema).optional(),
      update: z
        .union([
          z.lazy(() => LocationUpdateWithoutItemsInputObjectSchema),
          z.lazy(() => LocationUncheckedUpdateWithoutItemsInputObjectSchema),
        ])
        .optional(),
    })
    .strict();

export const LocationUpdateOneRequiredWithoutItemsNestedInputObjectSchema =
  Schema;

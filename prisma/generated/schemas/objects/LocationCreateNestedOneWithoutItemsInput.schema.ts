import { z } from 'zod';
import { LocationCreateWithoutItemsInputObjectSchema } from './LocationCreateWithoutItemsInput.schema';
import { LocationUncheckedCreateWithoutItemsInputObjectSchema } from './LocationUncheckedCreateWithoutItemsInput.schema';
import { LocationCreateOrConnectWithoutItemsInputObjectSchema } from './LocationCreateOrConnectWithoutItemsInput.schema';
import { LocationWhereUniqueInputObjectSchema } from './LocationWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.LocationCreateNestedOneWithoutItemsInput> = z
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
    connect: z.lazy(() => LocationWhereUniqueInputObjectSchema).optional(),
  })
  .strict();

export const LocationCreateNestedOneWithoutItemsInputObjectSchema = Schema;

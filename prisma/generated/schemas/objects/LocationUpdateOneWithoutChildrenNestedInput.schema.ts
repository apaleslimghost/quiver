import { z } from 'zod';
import { LocationCreateWithoutChildrenInputObjectSchema } from './LocationCreateWithoutChildrenInput.schema';
import { LocationUncheckedCreateWithoutChildrenInputObjectSchema } from './LocationUncheckedCreateWithoutChildrenInput.schema';
import { LocationCreateOrConnectWithoutChildrenInputObjectSchema } from './LocationCreateOrConnectWithoutChildrenInput.schema';
import { LocationUpsertWithoutChildrenInputObjectSchema } from './LocationUpsertWithoutChildrenInput.schema';
import { LocationWhereUniqueInputObjectSchema } from './LocationWhereUniqueInput.schema';
import { LocationUpdateWithoutChildrenInputObjectSchema } from './LocationUpdateWithoutChildrenInput.schema';
import { LocationUncheckedUpdateWithoutChildrenInputObjectSchema } from './LocationUncheckedUpdateWithoutChildrenInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.LocationUpdateOneWithoutChildrenNestedInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => LocationCreateWithoutChildrenInputObjectSchema),
        z.lazy(() => LocationUncheckedCreateWithoutChildrenInputObjectSchema),
      ])
      .optional(),
    connectOrCreate: z
      .lazy(() => LocationCreateOrConnectWithoutChildrenInputObjectSchema)
      .optional(),
    upsert: z
      .lazy(() => LocationUpsertWithoutChildrenInputObjectSchema)
      .optional(),
    disconnect: z.boolean().optional(),
    delete: z.boolean().optional(),
    connect: z.lazy(() => LocationWhereUniqueInputObjectSchema).optional(),
    update: z
      .union([
        z.lazy(() => LocationUpdateWithoutChildrenInputObjectSchema),
        z.lazy(() => LocationUncheckedUpdateWithoutChildrenInputObjectSchema),
      ])
      .optional(),
  })
  .strict();

export const LocationUpdateOneWithoutChildrenNestedInputObjectSchema = Schema;

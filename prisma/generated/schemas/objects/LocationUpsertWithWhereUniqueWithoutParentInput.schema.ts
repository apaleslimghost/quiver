import { z } from 'zod';
import { LocationWhereUniqueInputObjectSchema } from './LocationWhereUniqueInput.schema';
import { LocationUpdateWithoutParentInputObjectSchema } from './LocationUpdateWithoutParentInput.schema';
import { LocationUncheckedUpdateWithoutParentInputObjectSchema } from './LocationUncheckedUpdateWithoutParentInput.schema';
import { LocationCreateWithoutParentInputObjectSchema } from './LocationCreateWithoutParentInput.schema';
import { LocationUncheckedCreateWithoutParentInputObjectSchema } from './LocationUncheckedCreateWithoutParentInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.LocationUpsertWithWhereUniqueWithoutParentInput> =
  z
    .object({
      where: z.lazy(() => LocationWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(() => LocationUpdateWithoutParentInputObjectSchema),
        z.lazy(() => LocationUncheckedUpdateWithoutParentInputObjectSchema),
      ]),
      create: z.union([
        z.lazy(() => LocationCreateWithoutParentInputObjectSchema),
        z.lazy(() => LocationUncheckedCreateWithoutParentInputObjectSchema),
      ]),
    })
    .strict();

export const LocationUpsertWithWhereUniqueWithoutParentInputObjectSchema =
  Schema;

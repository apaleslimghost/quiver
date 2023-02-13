import { z } from 'zod';
import { LocationWhereUniqueInputObjectSchema } from './LocationWhereUniqueInput.schema';
import { LocationUpdateWithoutParentInputObjectSchema } from './LocationUpdateWithoutParentInput.schema';
import { LocationUncheckedUpdateWithoutParentInputObjectSchema } from './LocationUncheckedUpdateWithoutParentInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.LocationUpdateWithWhereUniqueWithoutParentInput> =
  z
    .object({
      where: z.lazy(() => LocationWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(() => LocationUpdateWithoutParentInputObjectSchema),
        z.lazy(() => LocationUncheckedUpdateWithoutParentInputObjectSchema),
      ]),
    })
    .strict();

export const LocationUpdateWithWhereUniqueWithoutParentInputObjectSchema =
  Schema;

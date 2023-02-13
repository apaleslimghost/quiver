import { z } from 'zod';
import { LocationWhereUniqueInputObjectSchema } from './LocationWhereUniqueInput.schema';
import { LocationCreateWithoutParentInputObjectSchema } from './LocationCreateWithoutParentInput.schema';
import { LocationUncheckedCreateWithoutParentInputObjectSchema } from './LocationUncheckedCreateWithoutParentInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.LocationCreateOrConnectWithoutParentInput> = z
  .object({
    where: z.lazy(() => LocationWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => LocationCreateWithoutParentInputObjectSchema),
      z.lazy(() => LocationUncheckedCreateWithoutParentInputObjectSchema),
    ]),
  })
  .strict();

export const LocationCreateOrConnectWithoutParentInputObjectSchema = Schema;

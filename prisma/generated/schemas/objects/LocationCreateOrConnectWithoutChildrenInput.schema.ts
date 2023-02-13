import { z } from 'zod';
import { LocationWhereUniqueInputObjectSchema } from './LocationWhereUniqueInput.schema';
import { LocationCreateWithoutChildrenInputObjectSchema } from './LocationCreateWithoutChildrenInput.schema';
import { LocationUncheckedCreateWithoutChildrenInputObjectSchema } from './LocationUncheckedCreateWithoutChildrenInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.LocationCreateOrConnectWithoutChildrenInput> = z
  .object({
    where: z.lazy(() => LocationWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => LocationCreateWithoutChildrenInputObjectSchema),
      z.lazy(() => LocationUncheckedCreateWithoutChildrenInputObjectSchema),
    ]),
  })
  .strict();

export const LocationCreateOrConnectWithoutChildrenInputObjectSchema = Schema;

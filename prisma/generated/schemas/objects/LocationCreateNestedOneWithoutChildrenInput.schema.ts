import { z } from 'zod';
import { LocationCreateWithoutChildrenInputObjectSchema } from './LocationCreateWithoutChildrenInput.schema';
import { LocationUncheckedCreateWithoutChildrenInputObjectSchema } from './LocationUncheckedCreateWithoutChildrenInput.schema';
import { LocationCreateOrConnectWithoutChildrenInputObjectSchema } from './LocationCreateOrConnectWithoutChildrenInput.schema';
import { LocationWhereUniqueInputObjectSchema } from './LocationWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.LocationCreateNestedOneWithoutChildrenInput> = z
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
    connect: z.lazy(() => LocationWhereUniqueInputObjectSchema).optional(),
  })
  .strict();

export const LocationCreateNestedOneWithoutChildrenInputObjectSchema = Schema;

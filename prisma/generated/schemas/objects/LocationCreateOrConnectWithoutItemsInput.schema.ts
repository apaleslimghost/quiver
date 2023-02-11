import { z } from 'zod';
import { LocationWhereUniqueInputObjectSchema } from './LocationWhereUniqueInput.schema';
import { LocationCreateWithoutItemsInputObjectSchema } from './LocationCreateWithoutItemsInput.schema';
import { LocationUncheckedCreateWithoutItemsInputObjectSchema } from './LocationUncheckedCreateWithoutItemsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.LocationCreateOrConnectWithoutItemsInput> = z
  .object({
    where: z.lazy(() => LocationWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => LocationCreateWithoutItemsInputObjectSchema),
      z.lazy(() => LocationUncheckedCreateWithoutItemsInputObjectSchema),
    ]),
  })
  .strict();

export const LocationCreateOrConnectWithoutItemsInputObjectSchema = Schema;

import { z } from 'zod';
import { LocationCreateWithoutParentInputObjectSchema } from './LocationCreateWithoutParentInput.schema';
import { LocationUncheckedCreateWithoutParentInputObjectSchema } from './LocationUncheckedCreateWithoutParentInput.schema';
import { LocationCreateOrConnectWithoutParentInputObjectSchema } from './LocationCreateOrConnectWithoutParentInput.schema';
import { LocationCreateManyParentInputEnvelopeObjectSchema } from './LocationCreateManyParentInputEnvelope.schema';
import { LocationWhereUniqueInputObjectSchema } from './LocationWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.LocationUncheckedCreateNestedManyWithoutParentInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => LocationCreateWithoutParentInputObjectSchema),
          z.lazy(() => LocationCreateWithoutParentInputObjectSchema).array(),
          z.lazy(() => LocationUncheckedCreateWithoutParentInputObjectSchema),
          z
            .lazy(() => LocationUncheckedCreateWithoutParentInputObjectSchema)
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(() => LocationCreateOrConnectWithoutParentInputObjectSchema),
          z
            .lazy(() => LocationCreateOrConnectWithoutParentInputObjectSchema)
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => LocationCreateManyParentInputEnvelopeObjectSchema)
        .optional(),
      connect: z
        .union([
          z.lazy(() => LocationWhereUniqueInputObjectSchema),
          z.lazy(() => LocationWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const LocationUncheckedCreateNestedManyWithoutParentInputObjectSchema =
  Schema;

import { z } from 'zod';
import { LocationCreateWithoutParentInputObjectSchema } from './LocationCreateWithoutParentInput.schema';
import { LocationUncheckedCreateWithoutParentInputObjectSchema } from './LocationUncheckedCreateWithoutParentInput.schema';
import { LocationCreateOrConnectWithoutParentInputObjectSchema } from './LocationCreateOrConnectWithoutParentInput.schema';
import { LocationUpsertWithWhereUniqueWithoutParentInputObjectSchema } from './LocationUpsertWithWhereUniqueWithoutParentInput.schema';
import { LocationCreateManyParentInputEnvelopeObjectSchema } from './LocationCreateManyParentInputEnvelope.schema';
import { LocationWhereUniqueInputObjectSchema } from './LocationWhereUniqueInput.schema';
import { LocationUpdateWithWhereUniqueWithoutParentInputObjectSchema } from './LocationUpdateWithWhereUniqueWithoutParentInput.schema';
import { LocationUpdateManyWithWhereWithoutParentInputObjectSchema } from './LocationUpdateManyWithWhereWithoutParentInput.schema';
import { LocationScalarWhereInputObjectSchema } from './LocationScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.LocationUpdateManyWithoutParentNestedInput> = z
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
    upsert: z
      .union([
        z.lazy(
          () => LocationUpsertWithWhereUniqueWithoutParentInputObjectSchema,
        ),
        z
          .lazy(
            () => LocationUpsertWithWhereUniqueWithoutParentInputObjectSchema,
          )
          .array(),
      ])
      .optional(),
    createMany: z
      .lazy(() => LocationCreateManyParentInputEnvelopeObjectSchema)
      .optional(),
    set: z
      .union([
        z.lazy(() => LocationWhereUniqueInputObjectSchema),
        z.lazy(() => LocationWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    disconnect: z
      .union([
        z.lazy(() => LocationWhereUniqueInputObjectSchema),
        z.lazy(() => LocationWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    delete: z
      .union([
        z.lazy(() => LocationWhereUniqueInputObjectSchema),
        z.lazy(() => LocationWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    connect: z
      .union([
        z.lazy(() => LocationWhereUniqueInputObjectSchema),
        z.lazy(() => LocationWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    update: z
      .union([
        z.lazy(
          () => LocationUpdateWithWhereUniqueWithoutParentInputObjectSchema,
        ),
        z
          .lazy(
            () => LocationUpdateWithWhereUniqueWithoutParentInputObjectSchema,
          )
          .array(),
      ])
      .optional(),
    updateMany: z
      .union([
        z.lazy(() => LocationUpdateManyWithWhereWithoutParentInputObjectSchema),
        z
          .lazy(() => LocationUpdateManyWithWhereWithoutParentInputObjectSchema)
          .array(),
      ])
      .optional(),
    deleteMany: z
      .union([
        z.lazy(() => LocationScalarWhereInputObjectSchema),
        z.lazy(() => LocationScalarWhereInputObjectSchema).array(),
      ])
      .optional(),
  })
  .strict();

export const LocationUpdateManyWithoutParentNestedInputObjectSchema = Schema;

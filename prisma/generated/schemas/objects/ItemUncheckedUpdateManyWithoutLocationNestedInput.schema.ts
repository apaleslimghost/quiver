import { z } from 'zod';
import { ItemCreateWithoutLocationInputObjectSchema } from './ItemCreateWithoutLocationInput.schema';
import { ItemUncheckedCreateWithoutLocationInputObjectSchema } from './ItemUncheckedCreateWithoutLocationInput.schema';
import { ItemCreateOrConnectWithoutLocationInputObjectSchema } from './ItemCreateOrConnectWithoutLocationInput.schema';
import { ItemUpsertWithWhereUniqueWithoutLocationInputObjectSchema } from './ItemUpsertWithWhereUniqueWithoutLocationInput.schema';
import { ItemCreateManyLocationInputEnvelopeObjectSchema } from './ItemCreateManyLocationInputEnvelope.schema';
import { ItemWhereUniqueInputObjectSchema } from './ItemWhereUniqueInput.schema';
import { ItemUpdateWithWhereUniqueWithoutLocationInputObjectSchema } from './ItemUpdateWithWhereUniqueWithoutLocationInput.schema';
import { ItemUpdateManyWithWhereWithoutLocationInputObjectSchema } from './ItemUpdateManyWithWhereWithoutLocationInput.schema';
import { ItemScalarWhereInputObjectSchema } from './ItemScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ItemUncheckedUpdateManyWithoutLocationNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => ItemCreateWithoutLocationInputObjectSchema),
          z.lazy(() => ItemCreateWithoutLocationInputObjectSchema).array(),
          z.lazy(() => ItemUncheckedCreateWithoutLocationInputObjectSchema),
          z
            .lazy(() => ItemUncheckedCreateWithoutLocationInputObjectSchema)
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(() => ItemCreateOrConnectWithoutLocationInputObjectSchema),
          z
            .lazy(() => ItemCreateOrConnectWithoutLocationInputObjectSchema)
            .array(),
        ])
        .optional(),
      upsert: z
        .union([
          z.lazy(
            () => ItemUpsertWithWhereUniqueWithoutLocationInputObjectSchema,
          ),
          z
            .lazy(
              () => ItemUpsertWithWhereUniqueWithoutLocationInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => ItemCreateManyLocationInputEnvelopeObjectSchema)
        .optional(),
      set: z
        .union([
          z.lazy(() => ItemWhereUniqueInputObjectSchema),
          z.lazy(() => ItemWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      disconnect: z
        .union([
          z.lazy(() => ItemWhereUniqueInputObjectSchema),
          z.lazy(() => ItemWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      delete: z
        .union([
          z.lazy(() => ItemWhereUniqueInputObjectSchema),
          z.lazy(() => ItemWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      connect: z
        .union([
          z.lazy(() => ItemWhereUniqueInputObjectSchema),
          z.lazy(() => ItemWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      update: z
        .union([
          z.lazy(
            () => ItemUpdateWithWhereUniqueWithoutLocationInputObjectSchema,
          ),
          z
            .lazy(
              () => ItemUpdateWithWhereUniqueWithoutLocationInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(() => ItemUpdateManyWithWhereWithoutLocationInputObjectSchema),
          z
            .lazy(() => ItemUpdateManyWithWhereWithoutLocationInputObjectSchema)
            .array(),
        ])
        .optional(),
      deleteMany: z
        .union([
          z.lazy(() => ItemScalarWhereInputObjectSchema),
          z.lazy(() => ItemScalarWhereInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const ItemUncheckedUpdateManyWithoutLocationNestedInputObjectSchema =
  Schema;

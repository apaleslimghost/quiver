import { z } from 'zod';
import { ItemCreateWithoutLocationInputObjectSchema } from './ItemCreateWithoutLocationInput.schema';
import { ItemUncheckedCreateWithoutLocationInputObjectSchema } from './ItemUncheckedCreateWithoutLocationInput.schema';
import { ItemCreateOrConnectWithoutLocationInputObjectSchema } from './ItemCreateOrConnectWithoutLocationInput.schema';
import { ItemCreateManyLocationInputEnvelopeObjectSchema } from './ItemCreateManyLocationInputEnvelope.schema';
import { ItemWhereUniqueInputObjectSchema } from './ItemWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ItemCreateNestedManyWithoutLocationInput> = z
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
    createMany: z
      .lazy(() => ItemCreateManyLocationInputEnvelopeObjectSchema)
      .optional(),
    connect: z
      .union([
        z.lazy(() => ItemWhereUniqueInputObjectSchema),
        z.lazy(() => ItemWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
  })
  .strict();

export const ItemCreateNestedManyWithoutLocationInputObjectSchema = Schema;
